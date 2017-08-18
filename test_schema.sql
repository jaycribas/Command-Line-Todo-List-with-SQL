DROP TABLE IF EXISTS test_todo_list;

CREATE TABLE test_todo_list(
  id SERIAL PRIMARY KEY,
  description VARCHAR NOT NULL
);
