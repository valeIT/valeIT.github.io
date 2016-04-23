---
layout: post
title: Migrating Off Parse - Database
date: 2016-04-23 19:19:03.000000000 +01:00
type: post
published: true
status: publish
categories:
- Me, Tech
author: Valentino Urbano 
---

As of [Parse Guidelines][0] all of the databases across all of my apps that were relying on Parse.com have been migrated off it. 

## How to migrate

- Login to the Parse Dashboard
- Go to App Settings -> App Management
- Click on Migrate Database

It will ask you for the URL of your mongoDB instance.

The format for it is:
```
mongodb://<dbuser>:<dbpassword>@<myserveraddress.com>:<port>/databaseName?ssl=true
```

When you're sure, press migrate. It will migrate all your data to your new database and give you a chance to review the changes. Make sure everything is correct before pressing "Finalize". There is no going back.

After the migration has completed you can't go back to a parse.com hosted database.

## Caveats:

- For some reason, in certain cases, the migration wouldn't work until i turned off SLL between the two MongoDB instances.
- For some reason, in certain cases, the migrations wouldn't work until the 10th try.


[0]: https://github.com/ParsePlatform/parse-server/wiki/Migrating-an-Existing-Parse-App