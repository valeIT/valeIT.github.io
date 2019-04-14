If you're used working in Mysql you usually would use the exact same syntax on other SQL based databases. Even when you switch to Postgres or SQLite most of the syntax is basically the same.

The syntax for Microsoft SQL, on the other hand, is slightly different. Nothing too different, but there are certain caveats that needs to be understood to avoid wasting time wondering why your 'perfectly good query' is not yielding any result even though you're sure there are results in the database because that's exactly what happened to us.

1. Use . as separators and make sure to include the collation (note the 3 dots):
   SELECT \* FROM [DBNAME]...TABLENAME WHERE 1
   If you don't add them it will not work

2. Use `'` before and after values otherwise it won't work:
   SELECT NAME FROM [DBNAME]...TABLENAME WHERE DESCRIPTION = 'desc1'
3. When using LIKE make sure to use = as well, this time without the ':
   SELECT NAME FROM [DBNAME]...TABLENAME WHERE DESCRIPTION = LIKE %desc1%

4. Everything is case sensitive so make sure to check if the string/table name you're looking for is uppercased or if it's lowercased in case you're not sure.

You shouldn't be scared of MSSQL. It is still an SQL based database and thanks to that it is really similar to both mysql (MariaDB) and Postgres. Just be wary of its differences when working on it and you'll get to it in no time.
