-- Create the `burgers_db`.
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

-- Switch to or use the `burgers_db`.
USE burger_db;

-- Create a `burgers` table with these fields:
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured boolean DEFAULT false,
  PRIMARY KEY(id)
);

