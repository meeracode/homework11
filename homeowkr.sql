-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS notes_db;
-- Create a database called programming_db --
CREATE DATABASE notes_db;

USE notes_db;

CREATE TABLE notes_data(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	`title` varchar(50) NOT NULL,
	`text` varchar(50) NOT NULL,
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  -- id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- language VARCHAR(20),
  -- rating INTEGER(11),
  -- Creates a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  PRIMARY KEY (id)
);

-- Creates new rows
INSERT INTO notes_data (title, text)
VALUES ("HTML", "This is a text ");


INSERT INTO notes_data (title, text)
VALUES ("JS", "This is a text ");


INSERT INTO notes_data (title, text)
VALUES ("JQUERY", "This is a text ");


INSERT INTO notes_data (title, text)
VALUES ("JQUERY", "This is a text ");
