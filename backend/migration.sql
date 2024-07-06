-- Create the database
CREATE DATABASE IF NOT EXISTS `hosting_example`;
USE `hosting_example`;

-- Create the photos table
CREATE TABLE IF NOT EXISTS `photos` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `filename` VARCHAR(255) NOT NULL,
  `filedir` VARCHAR(255) NOT NULL,
  `fileurl` VARCHAR(255) NOT NULL,
  `userFilename` VARCHAR(255),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
