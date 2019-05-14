---
layout: post
title: Using an SQLite Database in Unity
date: 2019-05-14 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image:
image2:
author: Valentino Urbano
---

To create and access an SQLite database in Unity you can use a custom version of [SQLite net][1] C# called [SQLite4Unity3d][2]. The framework uses reflection to automatically create queries for you and make it easier even for someone who doesn't have a solid grasp on SQL to create and retrieve object without having to write the queries by hand.

Add the files to your project and create a new class to handle interfacing with the database.

```
using SQLite4Unity3d;
using UnityEngine;
#if !UNITY_EDITOR
using System.Collections;
using System.IO;
#endif
using System.Collections.Generic;
using System.Linq;
//using NUnit.Framework;

public class DataService  {

	private SQLiteConnection _connection;

	public DataService(string DatabaseName){

#if UNITY_EDITOR
            var dbPath = string.Format(@"Assets/StreamingAssets/{0}", DatabaseName);
#else
        // check if file exists in Application.persistentDataPath
        var filepath = string.Format("{0}/{1}", Application.persistentDataPath, DatabaseName);

        if (!File.Exists(filepath))
        {
            Debug.Log("Database not in Persistent path");
            // if it doesn't ->
            // open StreamingAssets directory and load the db ->

#if UNITY_ANDROID
            var loadDb = new WWW("jar:file://" + Application.dataPath + "!/assets/" + DatabaseName);  // this is the path to your StreamingAssets in android
            while (!loadDb.isDone) { }  // CAREFUL here, for safety reasons you shouldn't let this while loop unattended, place a timer and error check
            // then save to Application.persistentDataPath
            File.WriteAllBytes(filepath, loadDb.bytes);
#elif UNITY_IOS
                 var loadDb = Application.dataPath + "/Raw/" + DatabaseName;  // this is the path to your StreamingAssets in iOS
                // then save to Application.persistentDataPath
                File.Copy(loadDb, filepath);
#elif UNITY_WP8
                var loadDb = Application.dataPath + "/StreamingAssets/" + DatabaseName;  // this is the path to your StreamingAssets in iOS
                // then save to Application.persistentDataPath
                File.Copy(loadDb, filepath);

#elif UNITY_WINRT
		var loadDb = Application.dataPath + "/StreamingAssets/" + DatabaseName;  // this is the path to your StreamingAssets in iOS
		// then save to Application.persistentDataPath
		File.Copy(loadDb, filepath);
#else
	var loadDb = Application.dataPath + "/StreamingAssets/" + DatabaseName;  // this is the path to your StreamingAssets in iOS
	// then save to Application.persistentDataPath
	File.Copy(loadDb, filepath);

#endif

            Debug.Log("Database written");
        }

        var dbPath = filepath;
#endif
            _connection = new SQLiteConnection(dbPath, SQLiteOpenFlags.ReadWrite | SQLiteOpenFlags.Create);
        Debug.Log("Final PATH: " + dbPath);

	}

```

Now we can create a method to populate the db on startup. You can embed a db in your application, but if you plan to ship it on mobile it is highly unlikely not to work if the db hasn't been created on device.

```
public void CreateDB(WorldContent[] content){
        //_connection.DropTable<WorldContent> ();
		    _connection.CreateTable<WorldContent> ();//already executes as if not exist
        _connection.InsertAll (content);
}
```

You call drop table to delete all the WorldContent objects from your database (useful for testing). You create the table and insert all the elements passed into the methods.

If you had instead one element instead of an array and wanted to either insert or update based on if the object already exists you can use `//_connection.InsertOrReplace(object);` where object the object you want to replace.

After you have inserted something you can get it back in multiple ways. You can either get all objects from a certain table (class) by using `return _connection.Table<WorldContent>();` or you can filter the results based on some condition using where `//Table<WorldContent>().Where(x => x.enabled == content.enabled && x.mapCount == content.mapCount && x.level > 1);`. You can also return only the first element by using `return _connection.Table<WorldContent>().Where(x => x.id == 0).FirstOrDefault();` right after the where statement.

The only thing to be aware is that your class needs to import the framework and implement a few accessories:

```
using SQLite4Unity3d;
public class WorldContent
{
    [PrimaryKey, Unique]
    public int id { get; set; }
    public string category { get; set; }
    public int enabled { get; set; }
    public int level { get; set; }
    public int mapCount { get; set; }
}
```

All great, unfortunately iOS doesn't support reflection too well. So if you plan on supporting it you need to write most queries by hand, it [will work fine for basic queries, but fail on more complex ones][2].

You can also nest your commands into transactions so that multiple queries get executed only if everything succeeds. You can start it by using `_connection.BeginTransaction();`, commit (save) using `_connection.Commit();` and rollback to before the BeginTransaction call using `_connection.Rollback();`.


[1]: https://github.com/praeclarum/sqlite-net
[2]: https://github.com/robertohuertasm/SQLite4Unity3d
