DROP TABLE IF EXISTS todo_list;

CREATE TABLE todo_list(
  id SERIAL PRIMARY KEY,
  description VARCHAR NOT NULL
);
