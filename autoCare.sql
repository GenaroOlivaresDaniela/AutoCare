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

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `autoCare` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;

USE `autoCare`;

/*Table structure for table `perfiles` */
DROP TABLE IF EXISTS `perfiles`;

CREATE TABLE
    `perfiles` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `perfil` varchar(50) NOT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

/*Data for the table `perfiles` */
insert into
    `perfiles` (`id`, `perfil`, `created_at`, `updated_at`)
values
    (
        1,
        'Cliente',
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    ),
    (
        2,
        'Administrador',
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    ),
    (
        3,
        'Trabajador',
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    );

/*Table structure for table `usuarios` */
DROP TABLE IF EXISTS `usuarios`;

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

/*Data for the table `usuarios` */
insert into
    `usuarios` (
        `id`,
        `nombre`,
        `app`,
        `apm`,
        `correo`,
        `contrasena`,
        `telefono`,
        `foto`,
        `id_perfil`,
        `created_at`,
        `updated_at`
    )
values
    (
        1,
        'Angel',
        'Barron',
        'Gonzalez',
        'angel@gmail.com',
        '123',
        '7234543212',
        '',
        1,
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    ),
    (
        2,
        'Jazael',
        'Mejia',
        'Silvestre',
        'jazael@gmail.com',
        '123',
        '7234543212',
        '',
        3,
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    ),
    (
        3,
        'Daniela',
        'Genaro',
        'Olivares',
        'dany@gmail.com',
        SHA2('123', 256),
        '7234543212',
        '',
        2,
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    );

/*Table structure for table `verificacion_correo` */
DROP TABLE IF EXISTS `verificacion_correo`;

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

/*Table structure for table `vehiculos` */
DROP TABLE IF EXISTS `vehiculos`;

CREATE TABLE
    `vehiculos` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `modelo` varchar(50) NOT NULL,
        `no_placa` varchar(50) NOT NULL,
        `no_serie` varchar(50) NOT NULL,
        `ano` int (5) NOT NULL,
        `marca` varchar(50) NOT NULL,
        `id_usuario` int (11) DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

/*Data for the table `vehiculos` */
insert into
    `vehiculos` (
        `id`,
        `modelo`,
        `no_placa`,
        `no_serie`,
        `ano`,
        `marca`,
        `id_usuario`,
        `created_at`,
        `updated_at`
    )
values
    (
        1,
        'Coupé',
        'mmm-0000',
        'nnnn-0000',
        2010,
        'BMW',
        1,
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    );

/*Table structure for table `galeria` */
DROP TABLE IF EXISTS `galeria`;

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

/*Data for the table `galeria` */
insert into
    `galeria` (
        `id`,
        `imagen`,
        `id_vehiculo`,
        `created_at`,
        `updated_at`
    )
values
    (
        1,
        'materias.png',
        1,
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    );

/*Table structure for table `detalles_diagnostico` */
DROP TABLE IF EXISTS `detalles_diagnostico`;

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

/*Data for the table `detalles_diagnostico` */
insert into
    `detalles_diagnostico` (
        `id`,
        `descripcion`,
        `id_vehiculo`,
        `created_at`,
        `updated_at`
    )
values
    (
        1,
        'Detecto un ruido en el motor cuando acelero',
        1,
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    );

/*Table structure for table `citas` */
DROP TABLE IF EXISTS `citas`;

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

/*Data for the table `citas` */
insert into
    `citas` (
        `id`,
        `fecha`,
        `hora`,
        `id_usuario`,
        `created_at`,
        `updated_at`
    )
values
    (
        1,
        '2024-10-01',
        '10:00:00',
        1,
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    );

/*Table structure for table `status_citas` */
DROP TABLE IF EXISTS `status_citas`;

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

/*Data for the table `status_citas` */
insert into
    `status_citas` (
        `id`,
        `estatus`,
        `fecha`,
        `id_cita`,
        `created_at`,
        `updated_at`
    )
values
    (
        1,
        'Revisión',
        '2024-10-10',
        1,
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    );

/*Table structure for table `reportes` */
DROP TABLE IF EXISTS `reportes`;

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

/*Data for the table `reportes` */
insert into
    `reportes` (
        `id`,
        `descripcion`,
        `fecha_inicio`,
        `fecha_fin`,
        `id_cita`,
        `created_at`,
        `updated_at`
    )
values
    (
        1,
        'Se le hizo cambio de aceite ya que se encontraba quemado, el cual tuvo un costo de $300',
        '2024-10-10',
        '2024-10-15',
        1,
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    );

/*Table structure for table `servicios` */
DROP TABLE IF EXISTS `servicios`;

CREATE TABLE
    `servicios` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `servicio` VARCHAR(100) DEFAULT NULL,
        `descripcion` LONGTEXT DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

/*Data for the table `servicios` */
insert into
    `servicios` (
        `id`,
        `servicio`,
        `descripcion`,
        `created_at`,
        `updated_at`
    )
values
    (
        1,
        'Electrico',
        'Se realiza una revisión en baterias y se genera un diagnostico',
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    ),
    (
        2,
        'Mecanico General',
        'Se realiza una revisión en baterias y se genera un diagnostico',
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    );

/*Table structure for table `servicios_trabajadores` */
DROP TABLE IF EXISTS `servicios_trabajadores`;

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

/*Data for the table `servicios_trabajadores` */
insert into
    `servicios_trabajadores` (
        `id`,
        `id_servicio`,
        `id_usuario`,
        `created_at`,
        `updated_at`
    )
values
    (
        1,
        1,
        2,
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    ),
    (
        2,
        2,
        2,
        '2024-09-24 15:41:33',
        '2024-09-24 15:41:33'
    );

    /*Table structure for table `citas_servicios_trabajadores` */
DROP TABLE IF EXISTS `citas_servicios_trabajadores`;

CREATE TABLE
    `citas_servicios_trabajadores` (
        `id` int (11) NOT NULL AUTO_INCREMENT,
        `id_cita` int (11) DEFAULT NULL,
        `id_servicio_u` int (11) DEFAULT NULL,
        `created_at` datetime DEFAULT NULL,
        `updated_at` datetime DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (id_cita) REFERENCES citas (id),
        FOREIGN KEY (id_servicio_u) REFERENCES servicios_trabajadores (id)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;