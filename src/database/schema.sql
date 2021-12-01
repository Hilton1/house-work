CREATE DATABASE housework;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE IF NOT EXISTS tasks (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS residents (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  cpf VARCHAR UNIQUE NOT NULL,
  phone VARCHAR,
  task_id UUID,
  FOREIGN KEY (task_id) REFERENCES tasks(id)
);
