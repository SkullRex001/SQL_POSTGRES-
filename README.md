PSQL

-------------------------------------------
\q -> quit

-------------------------------------------
\l -> list all database

-------------------------------------------
CREATE DATABASE test; -> create Database
-------------------------------------------

 \c test -> connect to database
--------------------------------------------

DROP DATABASE test; -> delete database

---------------------------------------------


--> Create Table :-

test=# CREATE TABLE person(
test(# id SERIAL NOT NULL PRIMARY KEY,
test(# first_name VARCHAR(50) NOT NULL,
test(# last_name VARCHAR(50) NOT NULL,
test(# gender VARCHAR(7) NOT NULL,
test(# date_of_birth DATE NOT NULL,
test(# email VARCHAR(150));
CREATE TABLE


----------------------------------------------

--> look inside database

test=# \d


             List of relations
 Schema |     Name      |   Type   | Owner
--------+---------------+----------+--------
 public | person        | table    | aditya
 public | person_id_seq | sequence | aditya
(2 rows)

----------------------------------------------

--> look inside table

aditya=# \d table_name


                                       Table "public.person"
    Column     |          Type          | Collation | Nullable |              Default

---------------+------------------------+-----------+----------+------------------------------------
 id            | integer                |           | not null | nextval('person_id_seq'::regclass)
 first_name    | character varying(50)  |           | not null |
 last_name     | character varying(50)  |           | not null |
 gender        | character varying(7)   |           | not null |
 date_of_birth | date                   |           | not null |
 email         | character varying(150) |           |          |
Indexes:
    "person_pkey" PRIMARY KEY, btree (id)



----------------------------------------------


