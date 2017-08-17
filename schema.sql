DROP DATABASE IF EXISTS cli_todolist;
CREATE DATABASE cli_todolist;

\c cli_todolist;

CREATE TABLE todolist(
  id SERIAL PRIMARY KEY,
  description VARCHAR NOT NULL
);
