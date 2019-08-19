---
layout: page
title: Optimizing Storage in Your App
---
# Optimizing Storage in Your App

{% include_relative BeforeEachFile.md %}

## Images

- Use HEIC instead of JPEG
50% smaller size at comparable quality
alpha support
lossless
multiple images in a single container

- Asset Catalog
Device and scale variants
On demand resources
App slicing for iOS
Better performance on Image Loading and App Launch (10% on HDD Mac)

- File System Metadata
[Video at 5:50]
Take the example of an app that updates a plist file with the latest launch date.
1 read
3 writes
Why?
Metadata writes.

APFS has copy on write so when we need to change the note of the filesystem.
When you update a file it needs to update the file system node and the object map on top of actually editing the file. Smallest filezise on iOS is 4k, so even if our file it's smaller it gets rounded up. So to edit a 200bytes file you take 12K (4k each).
2% efficiency.

Do not store small amount of data as individual file onthe filesystem.

Overhead for common operations:
Create 8k
Delete 8k
Rename 16k
Edit 8k

If you need to, keep the file open until you have finished.

## Caches

OS Cache (Logical IO) - Backed by memory, very quick
Disk Cache (Physical IO) - On Disk
Permanent Storage (NAND)

fsync() - move data from OSCache to DiskCache. Does not guarantee write ordering. Might not be written to permanent storage immediately. Expensive. Already called periodically by OS so usually not needed.
F_FULLFSYNC - All data in disk cache to be flushed to disk. Really Expensive. Already called periodically by OS so usually not needed.
F_BARRIERFSYNC - Enforced IO Ordering. IO before the barrier executed before the ones after.

Plist XML JSON
Easy to use for data that does not chance frequently.
- Scales poorly
- Whole file must be rewritten for every change
- Metadata intensive
- Not a db replacement

Look at disk usage in Instruments. For example writeDictToFile for NSDictionary ends with a call to fsync.

## Core Data

- Built on SQLite
- Manages Object graph and relationshiping
- change tacking
- automatic version tracking
- cloudkit integration
- live queries
- automatic memory mamangement
- transaction
- migrations
- denormalizations
- 50/70% less code for model layer

### SQLite
- Keep db open for as long as possible

Delete mode journaling is default to SQLite.

[Video @ 18:00]
WAL journaling
multiple writes to save page
snapshot support
Writes to a log until enough changes to write to db
More efficient for most use cases.

Use transactions.
Pages that are edited multiple times in same transaction get written only once to the db recuding load.

- DELETE

still on disk only marked as deleted

use PRAGMA secure_delete=FAST;
Default for SQLite for iOS13

- Size

Not use VACUUM
Really slow.
All data needs to be written twice.

Use auto_vacuum=INCREMENTAL, set incremental_vacuum to set the free pages to be available for future use for SQLite.

- Partial Indexes
Overhead for indexes
Give faster order by, .. clauses
Index only for specific where clause

## File Activity

Automatic Reasioning for:
- Ecessive physical writes
- Failed IO calls
- Suboptimal caching
Shown in Instruments in the Filesystem Suggestions.

[Video @ 29:23]
Opening and closing the db after each write
Favoriting 2 photos 1k operations, 6MB
[Video @ 31:35]
Having the connection always open
Using delete mode journaling
54 operations, 288k

[Video @ 32:30]
WAL journaling
Disk Usage only 2
In delete mode when we have filesystem usage we have disk writes. Here it leverages the cache.
In Filesystem Activity -> Statistics -> WAL has 1 fsync call, DELETE has 16.

Delete a photo
one delete query per photo
111 operations,12 writes for 72 kb

transaction
27 operations,4 writes, 24kb

Full Vacuum
27 operations, 168kb
Incremental
12 op, 72kb

Source
[Optimizing Storage in Your App](https://developer.apple.com/wwdc19/419)