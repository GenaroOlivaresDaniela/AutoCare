/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.28-MariaDB : Database - autoCare
 *********************************************************************
 */
/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE `autoCare`;

USE `autoCare`;

CREATE TABLE
    `perfiles` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `perfil` varchar(50) NOT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE
    `usuarios` (
        `id` INT (11) NOT NULL AUTO_INCREMENT,
        `nombre` VARCHAR(100) DEFAULT NULL,
        `app` VARCHAR(100) DEFAULT NULL,
        `apm` VARCHAR(100) DEFAULT NULL,
        `correo` VARCHAR(100) UNIQUE,
        `contrasena` LONGTEXT DEFAULT NULL,
        `telefono` VARCHAR(15) DEFAULT NULL,
        `foto` VARCHAR(100) DEFAULT NULL,
        `id_perfil` INT (11) DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (id_perfil) REFERENCES perfiles (id)
    ) ENGINE = INNODB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE
    `verificacion_correo` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `token` LONGTEXT DEFAULT NULL,
        `id_usuario` int (11) DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE
    `vehiculos` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `modelo` varchar(50) NOT NULL,
        `no_placa` varchar(50) NOT NULL,
        `no_serie` varchar(50) NOT NULL,
        `ano` int (5) NOT NULL,
        `marca` varchar(50) NOT NULL,
        `imagen` varchar(250) NULL,
        `id_usuario` int (11) DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE
    `galeria` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `imagen` varchar(50) NOT NULL,
        `id_vehiculo` int (11) DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (id_vehiculo) REFERENCES vehiculos (id)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE
    `detalles_diagnostico` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `descripcion` LONGTEXT NOT NULL,
        `id_vehiculo` int (11) DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (id_vehiculo) REFERENCES vehiculos (id)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE
    `citas` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `fecha` DATE NOT NULL,
        `hora` TIME NOT NULL,
        `id_usuario` int (11) DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE
    `status_citas` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `estatus` ENUM ('Llegada', 'Revisión', 'Entrega') DEFAULT ('Llegada'),
        `fecha` DATE NOT NULL,
        `id_cita` int (11) DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (id_cita) REFERENCES citas (id)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE
    `reportes` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `descripcion` LONGTEXT DEFAULT NULL,
        `fecha_inicio` DATE DEFAULT NULL,
        `fecha_fin` DATE DEFAULT NULL,
        `id_cita` int (11) DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (id_cita) REFERENCES citas (id)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE
    `servicios` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `servicio` VARCHAR(100) DEFAULT NULL,
        `descripcion` LONGTEXT DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE
    `servicios_trabajadores` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `id_servicio` int (11) DEFAULT NULL,
        `id_usuario` int (11) DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (id_servicio) REFERENCES servicios (id),
        FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE
    `citas_servicios_trabajadores` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `id_cita` int (11) DEFAULT NULL,
        `id_servicio` int (11) DEFAULT NULL,
        `id_trabajador` int (11) DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (id_cita) REFERENCES citas (id),
        FOREIGN KEY (id_servicio) REFERENCES servicios (id)
        FOREIGN KEY (id_trabajador) REFERENCES usuarios (id)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

