---
layout: post
title: Weird NSClassFromString Crash With Swift
date: 2019-01-02 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

# Weird NSClassFromString crash

In December I was integrating the minimalist [FCModel][0], a simple way to access your SQLite database, into one of my Mac applications. I chose it because I needed a way to store data in an SQLite database, but I didn't want something as complicated as CoreData to do it.

**Note**: The benefit of MCModel is that it's very simple in its implementation.

Marco (the author) sums it up beautifully:

> More than anything else, I'd like to keep FCModel small, simple, and easy to fit in your mental L2 cache.
> Please note that you need to be able to write SQL queries and have experience with databases before using this. If you don't use a more high-level solution (like Realm or Core Data).

I followed the README, started the application and created the database successfully. When I tried to access an element through the app crashed.

With it being open source, I could also debug and fix any problem that would arise myself. I value that greatly.

Being used to a business/corporate environment where everything is closed source and locked down, it's refreshing.

Usually, I have to wait days (or sometimes weeks) for someone to read the ticket and respond. And had to pay for it, unless support was included in the contract (usually it was, but not always).

## The crash

From my app, I was trying to load all objects for a specific class, a simple SQL SELECT \*.

At this point, I didn't add a single record so I expected to receive an empty array.

Instead the app crashed in `FCModel.m` inside the framework:

```
+ (NSString *)expandQuery:(NSString *)query
{
    if (self == FCModel.class) return query;
    query = [query stringByReplacingOccurrencesOfString:@"$PK" withString:g_primaryKeyFieldName[self]];//<-here
    return [query stringByReplacingOccurrencesOfString:@"$T" withString:NSStringFromClass(self)];
}
```

Stepping with the debugger attached turned out that `g_primaryKeyFieldName[self]` was nil. The method is trying to read the class name of the object dynamically, so it looked like I passed in the wrong class. The class name shown was correct though. After some search, I found the culprit in the function that opens the database connection. `g_primaryKeyFieldName` is set-up from the class name obtained dynamically.

Here again further down in the code, the same problem presented itself, but this time the class was nil:

```
    NSString *tableName = [tablesRS stringForColumnIndex:0];
    Class tableModelClass = NSClassFromString(tableName);
```

But if you stopped the program and printed out tableName it printed out the correct class name, so the information was there. It was a problem of retrieving it. `NSClassFromString` was failing to load the class from its name.

At first, I thought it was a swift problem, that the class wasn't accessible to Objective-C. Swift is a static language by nature so you need to go back to Objective-C to work more dynamically. That was not the problem though since everything was marked as `@obj-c` and `dynamic` (so it was accessible and visible by the Objective-C runtime). The class was also a subclass of NSObject (by being a subclass of FCModel which derives from NSObject) so that was not the problem either. It must be something else.

[Looking at the official documentation though something stood out][2]:

> In order to retrieve a Swift class, the fully qualified name, including the name of the app, is used.
> let myPersonClass: AnyClass? = NSClassFromString("MyGreatApp.Person")

The lesson?

**Never assume that the same method called the same way from Swift or Objective-C always gives the exact same result.**

The exact same code would have worked perfectly in Objective-C without being forced to prepend the application name, you also would think that Swift would know what the application name was and that if no name is prepended it would automatically prepend the name of the current application that was running, but that's not the case either.

## Pull Request

Looking through the `Issues` I noticed that someone else had the same problem. I spent 10 minutes summing up the solution I found in the section about initialization of the database in the README so that other people would know of the workaround.

On top of adding the how to I also setup the example project that comes with the Framework to use the correct initialization code so if you would just mindlessly copy from the example I would just work:

> #### Swift Caveats
>
> If you're using swift the class name is AppName.ClassName so instead of Person the table needs to be called Overcast.Person. Please note that . is used as a separator so you need to enclose it in ". Example:
>
> ```swift
>    let documentsPath = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true)[0]
>    let dbPath = documentsPath.stringByAppendingPathComponent("prod.sqlite3")
>    FCModel.openDatabase(atPath: dbPath) { (database, schemaVersion) in
>      database?.beginTransaction()
>
>      func failedAt(statement: Int, database: FMDatabase?) {
>        database?.rollback()
>        guard let lastErrorCode = database?.lastErrorCode, let lastErrorMessage = database?.lastErrorMessage else {
>          log.error("no db")
>          return
>        }
>
>        let errorMessage = "Migration statement \(statement) failed, code \(lastErrorCode): \(lastErrorMessage)"
>        log.error(errorMessage)
>        assertionFailure(errorMessage)
>      }
>
>      if (schemaVersion?.pointee ?? 0 < Int32(1)) {
>        if (database?.executeStatements(
>        """
>        CREATE TABLE \"Overcast.Person\" (
>                      id           INTEGER PRIMARY KEY,
>                      name        TEXT NOT NULL DEFAULT '',
>                      time  REAL NOT NULL,
>                  );
>        """
>          ) ?? false) {
>          //success
>        } else {
>          failedAt(statement: 1, database: database)
>        }
>
>        if (database?.executeStatements("CREATE INDEX IF NOT EXISTS applicationName ON \"Overcast.Person\" (applicationName);") ?? false) {
>          //success
>        } else {
>          failedAt(statement: 2, database: database)
>        }
>
>        schemaVersion?.pointee = 1
>      }
>
>        // If you wanted to change the schema in a later app version, you'd add something like this here:
>        /*
>         if (*schemaVersion < 2) {
>         if (! [db executeUpdate:@"ALTER TABLE Person ADD COLUMN title TEXT NOT NULL DEFAULT ''"]) failedAt(3);
>         *schemaVersion = 2;
>         }
>
>         // And so on...
>         if (*schemaVersion < 3) {
>         if (! [db executeUpdate:@"CREATE TABLE..."]) failedAt(4);
>         *schemaVersion = 3;
>         }
>
>         */
>
>        database?.commit()
>
>      }
> ```

[Pull request][1]

#### Edit

After writing the first draft of the article, but before publishing it, I noticed that someone already came across the problem and [fixed it][3]. The new version though hasn't been released to Cocoapods yet[^1]. I still think that it should be documented in the README though - at least until the new version gets released.

[0]: https://github.com/marcoarment/FCModel
[1]: https://github.com/marcoarment/FCModel/pull/153
[2]: https://developer.apple.com/library/content/documentation/Swift/Conceptual/BuildingCocoaApps/WritingSwiftClassesWithObjective-CBehavior.html#//apple_ref/doc/uid/TP40014216-CH5-XID_57
[3]: https://github.com/marcoarment/FCModel/pull/134

[^1]: To get it you need to take it directly from the master branch.
