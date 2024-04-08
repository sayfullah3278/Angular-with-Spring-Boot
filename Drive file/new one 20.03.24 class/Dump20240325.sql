CREATE DATABASE  IF NOT EXISTS `hospital-api001` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hospital-api001`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: hospital-api001
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admission`
--

DROP TABLE IF EXISTS `admission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admission` (
  `admission_id` int NOT NULL AUTO_INCREMENT,
  `admission_date` date DEFAULT NULL,
  `age` int NOT NULL,
  `blood_group` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `disease_description` varchar(255) DEFAULT NULL,
  `doctor` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `emergency_contact_number` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `relationship_with_patient` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  `bed_id` bigint DEFAULT NULL,
  PRIMARY KEY (`admission_id`),
  KEY `FKqi7hetb5f8mblyma0kd4b6j4b` (`doctor_id`),
  KEY `FK1cscbomxn4p8997esqvcs5x0t` (`bed_id`),
  CONSTRAINT `FK1cscbomxn4p8997esqvcs5x0t` FOREIGN KEY (`bed_id`) REFERENCES `bade_manage` (`bed_id`),
  CONSTRAINT `FKqi7hetb5f8mblyma0kd4b6j4b` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admission`
--

LOCK TABLES `admission` WRITE;
/*!40000 ALTER TABLE `admission` DISABLE KEYS */;
INSERT INTO `admission` VALUES (1,'2024-03-05',12,'B+','Hematology','asdasdas','undefined','sayfullah3278@gmail.com','01900000','K. M. Sayfullah','01516147692','Brother','male',3,NULL),(2,'2024-03-14',12,'B+','Hematology','back boon boon pain adn ','undefined','sayfullah3278@gmail.com','01900000','S m Sayful','01516147692','Brother','male',4,NULL),(3,'2024-03-20',34,'B+','Hematology','Nack pain','undefined','saifol@gmail.com','0987654','saifol','53436546546','Friend','male',5,NULL),(4,'2024-03-21',28,'B+','General Services','Anemia','undefined','alim@gmail.com','0115544','Abdul alim','53436546546','Friend','male',1,15),(5,'2024-03-14',65,'B+','Hematology','Anemia','undefined','jaman@gmail.com','0115544','Jaman Haque','53436546546','Son','male',5,14),(6,'2024-03-15',36,'B+','Hematology','Anemia','Dr. Tahmina Alam','hamin@gmail.com','3698522','Hamin Rahman','14778522','Friend','male',5,11),(7,'2024-03-20',37,'A+','General Services','Anemia','Dr. Tonmoy','rami@gmail.com','0987654','Rami Malek','1234568','Son','male',2,12),(8,'2024-03-20',27,'A+','General Services','Anemia','Dr. Tonmoy','uman@gmail.com','0115544','Uman Alim','0125478','Friend','male',1,13),(9,'2024-03-19',39,'A+','General Services','Anemia','Dr. Tonmoy','hamin@gmail.com','0115544','Hamin Shah','0125478','Friend','male',1,9),(10,'2024-03-15',12,'B+','Cardiology','kfhkasdjasdfhv','Dr. Tonmoy','tonmoy@gmail.com','01900000','johir','053553634','Brother','male',9,10),(11,'2024-03-01',23,'O+','Hematology','Animia','Dr. Tabassum','safad@gmail.com','0192448587','Safad Hosain','0192448587','Brother','male',3,15);
/*!40000 ALTER TABLE `admission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `appointment_id` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `disease` varchar(255) DEFAULT NULL,
  `doctor_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  PRIMARY KEY (`appointment_id`),
  KEY `FKgpgce3qtc5fajyl4j5srcjkcf` (`doctor_id`),
  CONSTRAINT `FKgpgce3qtc5fajyl4j5srcjkcf` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,'2024-03-20','Otolaryngology','Chest pound ','Dr. Gawtom pal','tamim3278@gmail.com','Tamim','0192448587',NULL),(2,'2024-03-21','Otolaryngology','Chest pound ','Dr. Gawtom pal','sadf3278@gmail.com','gdfgsdg','52345324',NULL),(3,'2024-03-22','Cardiology','Chest pound ','dr. jghfjh','tamim3278@gmail.com','jokar','0192448587',NULL),(4,'2024-03-25','Cardiology','cardiack areast','dr. jghfjh','emon@gmail.com','Emon','053553634',NULL),(5,'2024-03-25','Cardiology','chasts pain','dr. jghfjh','Hridoy@gmail.com','Hridoy Kumar sha ','519262',NULL),(6,'2024-03-25','Cardiology','heart Blockage','dr. jghfjh','Kumar@gmail.com','Kumar sha ','63258',NULL);
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bade_manage`
--

DROP TABLE IF EXISTS `bade_manage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bade_manage` (
  `bed_id` bigint NOT NULL AUTO_INCREMENT,
  `bed_catagori` varchar(255) DEFAULT NULL,
  `bed_charge` double DEFAULT NULL,
  `bed_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`bed_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bade_manage`
--

LOCK TABLES `bade_manage` WRITE;
/*!40000 ALTER TABLE `bade_manage` DISABLE KEYS */;
INSERT INTO `bade_manage` VALUES (9,'General',600,'bade A05'),(10,'ac',1200,'AC CABIN A03'),(11,'ac',500,'005'),(12,'AC',1500,'AC CABIN A04'),(13,'General',600,'Bade A02'),(14,'General Ac',800,'bade A08'),(15,'Genarel',900,'bade A006'),(17,'General',600,'bade A09');
/*!40000 ALTER TABLE `bade_manage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill` (
  `bill_id` int NOT NULL AUTO_INCREMENT,
  `admited_days` double NOT NULL,
  `admition_date` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `daily_cost` double NOT NULL,
  `discharg_date` varchar(255) DEFAULT NULL,
  `due_amount` double NOT NULL,
  `paid_amount` double NOT NULL,
  `passent_name` varchar(255) DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `total_amount` double NOT NULL,
  `admission_id_admission_id` int DEFAULT NULL,
  PRIMARY KEY (`bill_id`),
  KEY `FKp3xnebnuhypd2j6nrgar5nxki` (`admission_id_admission_id`),
  CONSTRAINT `FKp3xnebnuhypd2j6nrgar5nxki` FOREIGN KEY (`admission_id_admission_id`) REFERENCES `admission` (`admission_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
INSERT INTO `bill` VALUES (4,1,'2024-03-20','37',1500,'2024-03-21',0,1500,'Rami Malek','cash',1500,7),(5,7,'2024-03-15','36',500,'2024-03-22',0,3499,'Hamin Rahman','cash',3500,6),(26,4,'2024-03-19','39',600,'2024-03-23',0,8400,'Hamin Shah','cash',8400,9);
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `total_pric` double DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `due_price` double DEFAULT NULL,
  `paid_amount` double DEFAULT NULL,
  `total_price` double DEFAULT NULL,
  `userid` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discharge`
--

DROP TABLE IF EXISTS `discharge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discharge` (
  `discharge_id` int NOT NULL AUTO_INCREMENT,
  `admissiondate` date DEFAULT NULL,
  `admitade_dayse` int NOT NULL,
  `age` int NOT NULL,
  `discharge_date` date DEFAULT NULL,
  `discharge_summary` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `admission_id` int DEFAULT NULL,
  PRIMARY KEY (`discharge_id`),
  KEY `FK5ojpyrcrsvieipj42af0chif` (`admission_id`),
  CONSTRAINT `FK5ojpyrcrsvieipj42af0chif` FOREIGN KEY (`admission_id`) REFERENCES `admission` (`admission_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discharge`
--

LOCK TABLES `discharge` WRITE;
/*!40000 ALTER TABLE `discharge` DISABLE KEYS */;
INSERT INTO `discharge` VALUES (1,'2024-03-14',0,12,'2024-03-14','Discharged successfully.','K. M. Sayfullah',2),(2,'2024-03-20',1,37,'2024-03-21','Discharged successfully.','Rami Malek',7),(3,'2024-03-15',7,36,'2024-03-22','Discharged successfully.','Hamin Rahman',6),(4,'2024-03-19',4,39,'2024-03-23','Discharged successfully.','Hamin Shah',9),(6,'2024-03-15',8,12,'2024-03-23','Discharged successfully.','johir',10),(7,'2024-03-01',22,23,'2024-03-23','Discharged successfully.','Safad Hosain',11);
/*!40000 ALTER TABLE `discharge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `doctor_id` int NOT NULL AUTO_INCREMENT,
  `department` varchar(255) DEFAULT NULL,
  `doctor_name` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `joining_date` date DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `qualification` varchar(255) DEFAULT NULL,
  `specilization` varchar(255) DEFAULT NULL,
  `doctor_fee` double DEFAULT NULL,
  PRIMARY KEY (`doctor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'General Services','Dr. Tonmoy','22 years','2024-03-06','01900000','MBBS, FCPS',NULL,1500),(2,'General Services','Dr. Tonima','22 years','2024-03-06','01900000','MBBS, FCPS',NULL,1800),(3,'Hematology','Dr. Tabassum','22 years','2024-03-06','01900000','MBBS, FCPS',NULL,1700),(4,'Hematology','Dr. Tahmina','4 years','2024-03-06','01900000','MBBS, FCPS',NULL,2000),(5,'Hematology','Dr. Tahmina Alam','4 years','2024-03-06','01900000','MBBS, FCPS',NULL,1550),(6,'Otolaryngology','Dr. Gawtom pal','3 years','2024-01-25','53553634','MBBS, FCPS',NULL,1200),(9,'Cardiology','dr. jghfjh','7year','2021-01-07','6757657546','MBBS, FCPS',NULL,1500);
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `employee_id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `father_name` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicine_order`
--

DROP TABLE IF EXISTS `medicine_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_created` datetime(6) DEFAULT NULL,
  `total` double DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjdvo6fj2qugcn6fb4ketk8lfq` (`user_id`),
  CONSTRAINT `FKjdvo6fj2qugcn6fb4ketk8lfq` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine_order`
--

LOCK TABLES `medicine_order` WRITE;
/*!40000 ALTER TABLE `medicine_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicine_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_test`
--

DROP TABLE IF EXISTS `order_test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_test` (
  `id` bigint NOT NULL,
  `price` decimal(38,2) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `order_id` bigint DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKk2qttkll5p5lou6f4qh6gw4um` (`product_id`),
  KEY `FKnhjvj7fgnb1m63sqt6j4us6l3` (`order_id`),
  CONSTRAINT `FK6v7h081n7rdj8u163ujo1onil` FOREIGN KEY (`order_id`) REFERENCES `ordere` (`id`),
  CONSTRAINT `FKk2qttkll5p5lou6f4qh6gw4um` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `FKnhjvj7fgnb1m63sqt6j4us6l3` FOREIGN KEY (`order_id`) REFERENCES `medicine_order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_test`
--

LOCK TABLES `order_test` WRITE;
/*!40000 ALTER TABLE `order_test` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordere`
--

DROP TABLE IF EXISTS `ordere`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordere` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_created` datetime(6) DEFAULT NULL,
  `total` double DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKf96neud301tdksgm4lvolnwqf` (`user_id`),
  CONSTRAINT `FKf96neud301tdksgm4lvolnwqf` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordere`
--

LOCK TABLES `ordere` WRITE;
/*!40000 ALTER TABLE `ordere` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordere` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_sarch`
--

DROP TABLE IF EXISTS `patient_sarch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_sarch` (
  `id` int NOT NULL AUTO_INCREMENT,
  `age` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `appointments_id` int DEFAULT NULL,
  `doctor_name` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKp3y2dvoi1o1h28ca1hm2h4x7v` (`appointments_id`),
  KEY `FK7ob4ae5o9lraemojkg6wtshe7` (`doctor_name`),
  CONSTRAINT `FK7ob4ae5o9lraemojkg6wtshe7` FOREIGN KEY (`doctor_name`) REFERENCES `doctor` (`doctor_id`),
  CONSTRAINT `FKp3y2dvoi1o1h28ca1hm2h4x7v` FOREIGN KEY (`appointments_id`) REFERENCES `appointments` (`appointment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_sarch`
--

LOCK TABLES `patient_sarch` WRITE;
/*!40000 ALTER TABLE `patient_sarch` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_sarch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `department` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `sub_total` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_and_pasient`
--

DROP TABLE IF EXISTS `test_and_pasient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_and_pasient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact` varchar(255) DEFAULT NULL,
  `delevery_time` varchar(255) DEFAULT NULL,
  `due_amount` double DEFAULT NULL,
  `paid_amount` double DEFAULT NULL,
  `pasent_name` varchar(255) DEFAULT NULL,
  `refferal` varchar(255) DEFAULT NULL,
  `total_amount` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_and_pasient`
--

LOCK TABLES `test_and_pasient` WRITE;
/*!40000 ALTER TABLE `test_and_pasient` DISABLE KEYS */;
/*!40000 ALTER TABLE `test_and_pasient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testcart`
--

DROP TABLE IF EXISTS `testcart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testcart` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `department` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `sub_total` double NOT NULL,
  `cart_id` bigint DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `FKtieck7pgt2ljbjoty4tk0mb1l` (`cart_id`),
  CONSTRAINT `FKtieck7pgt2ljbjoty4tk0mb1l` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testcart`
--

LOCK TABLES `testcart` WRITE;
/*!40000 ALTER TABLE `testcart` DISABLE KEYS */;
INSERT INTO `testcart` VALUES (1,'Radiology',1200,'X-ray',0,NULL),(2,'Radiology',1200,'PET Scan',0,NULL),(3,'Radiology',1700,'MRI Scan',0,NULL),(4,'Radiology',2000,'CT/CAT Scan',0,NULL);
/*!40000 ALTER TABLE `testcart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `id` int NOT NULL AUTO_INCREMENT,
  `is_logged_out` bit(1) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKe32ek7ixanakfqsdaokm4q9y2` (`user_id`),
  CONSTRAINT `FKe32ek7ixanakfqsdaokm4q9y2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('ADMIN','EMPLOYEE','USER') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-25  1:15:20
