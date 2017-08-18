-- this file should also have a create database command
DROP TABLE IF EXISTS todolist;

CREATE TABLE todolist(
  id SERIAL PRIMARY KEY,
  description VARCHAR NOT NULL
);
