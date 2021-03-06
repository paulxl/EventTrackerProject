-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema doggoneitdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `doggoneitdb` ;

-- -----------------------------------------------------
-- Schema doggoneitdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `doggoneitdb` DEFAULT CHARACTER SET utf8 ;
USE `doggoneitdb` ;

-- -----------------------------------------------------
-- Table `volunteer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `volunteer` ;

CREATE TABLE IF NOT EXISTS `volunteer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(60) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `active` TINYINT NULL DEFAULT 1,
  `size` VARCHAR(45) NULL DEFAULT 'all',
  `breeds` VARCHAR(100) NULL DEFAULT 'all',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS volunteer@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'volunteer'@'localhost' IDENTIFIED BY 'vol222';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'volunteer'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `volunteer`
-- -----------------------------------------------------
START TRANSACTION;
USE `doggoneitdb`;
INSERT INTO `volunteer` (`id`, `username`, `password`, `firstname`, `lastname`, `active`, `size`, `breeds`) VALUES (1, 'paul@skilldistillery.com', 'paul', 'paul', 'lewis', 1, 'all', 'all');
INSERT INTO `volunteer` (`id`, `username`, `password`, `firstname`, `lastname`, `active`, `size`, `breeds`) VALUES (2, 'candace@skilldistillery.com', 'candace', 'candace', 'lewis', 1, 'med', 'pities, boxers, mutts');
INSERT INTO `volunteer` (`id`, `username`, `password`, `firstname`, `lastname`, `active`, `size`, `breeds`) VALUES (3, 'wadesmith@yahoo.com', 'wade', 'wade', 'smith', 1, 'small', 'yorkies, daschhounds');
INSERT INTO `volunteer` (`id`, `username`, `password`, `firstname`, `lastname`, `active`, `size`, `breeds`) VALUES (4, 'sueheart@mac.com', 'sue', 'sue', 'heart', 0, 'large', 'all big breeds');

COMMIT;

