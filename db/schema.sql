DROP DATABASE IF EXISTS burgers_database;
CREATE DATABASE burgers_database;

USE burgers_database;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
