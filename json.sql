-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2013 a las 19:20:17
-- Versión del servidor: 5.5.27
-- Versión de PHP: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `json`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objetivos`
--

CREATE TABLE IF NOT EXISTS `objetivos` (
  `v_id` int(8) NOT NULL,
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `type` varchar(8) NOT NULL,
  `date` varchar(50) NOT NULL,
  `amount` int(8) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_objetivos` (`v_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=115 ;

--
-- Volcado de datos para la tabla `objetivos`
--

INSERT INTO `objetivos` (`v_id`, `id`, `type`, `date`, `amount`) VALUES
(1, 1, 'target', '2013-01-01T23:15:30Z', 0),
(1, 2, 'target', '2013-03-31T23:15:30Z', 58000),
(1, 3, 'target', '2013-06-30T23:15:30Z', 311000),
(1, 4, 'target', '2013-09-30T23:15:30Z', 312000),
(1, 5, 'target', '2013-12-31T23:15:30Z', 330000),
(1, 6, 'actual', '2013-09-31T23-04T16:17:51Z', 530000),
(2, 7, 'target', '2013-01-01T23:15:30Z', 0),
(2, 8, 'target', '2013-03-31T23:15:30Z', 89000),
(2, 9, 'target', '2013-06-30T23:15:30Z', 233000),
(2, 10, 'target', '2013-09-30T23:15:30Z', 235000),
(2, 11, 'target', '2013-12-31T23:15:30Z', 250000),
(2, 12, 'actual', '2013-09-04T16:17:51Z', 250000),
(3, 13, 'target', '2013-01-01T23:15:30Z', 0),
(3, 14, 'target', '2013-03-31T23:15:30Z', 340000),
(3, 15, 'target', '2013-06-30T23:15:30Z', 460000),
(3, 16, 'target', '2013-09-30T23:15:30Z', 528000),
(3, 17, 'target', '2013-12-31T23:15:30Z', 540000),
(3, 18, 'actual', '2013-09-04T16:17:51Z', 208000),
(4, 19, 'target', '2013-01-01T23:15:30Z', 0),
(4, 20, 'target', '2013-03-31T23:15:30Z', 171000),
(4, 21, 'target', '2013-06-30T23:15:30Z', 287000),
(4, 22, 'target', '2013-09-30T23:15:30Z', 337000),
(4, 23, 'target', '2013-12-31T23:15:30Z', 690000),
(4, 24, 'actual', '2013-09-04T16:17:51Z', 104000),
(5, 25, 'target', '2013-01-01T23:15:30Z', 0),
(5, 26, 'target', '2013-03-31T23:15:30Z', 333000),
(5, 27, 'target', '2013-06-30T23:15:30Z', 379000),
(5, 28, 'target', '2013-09-30T23:15:30Z', 379000),
(5, 29, 'target', '2013-12-31T23:15:30Z', 380000),
(5, 30, 'actual', '2013-09-04T16:17:51Z', 377000),
(6, 31, 'target', '2013-01-01T23:15:30Z', 0),
(6, 32, 'target', '2013-03-31T23:15:30Z', 54000),
(6, 33, 'target', '2013-06-30T23:15:30Z', 151000),
(6, 34, 'target', '2013-09-30T23:15:30Z', 164000),
(6, 35, 'target', '2013-12-31T23:15:30Z', 170000),
(6, 36, 'actual', '2013-09-04T16:17:51Z', 104000),
(7, 37, 'target', '2013-01-01T23:15:30Z', 0),
(7, 38, 'target', '2013-03-31T23:15:30Z', 168000),
(7, 39, 'target', '2013-06-30T23:15:30Z', 935000),
(7, 40, 'target', '2013-09-30T23:15:30Z', 948000),
(7, 41, 'target', '2013-12-31T23:15:30Z', 950000),
(7, 42, 'actual', '2013-09-04T16:17:51Z', 975000),
(8, 43, 'target', '2013-01-01T23:15:30Z', 0),
(8, 44, 'target', '2013-03-31T23:15:30Z', 41000),
(8, 45, 'target', '2013-06-30T23:15:30Z', 157000),
(8, 46, 'target', '2013-09-30T23:15:30Z', 157000),
(8, 47, 'target', '2013-12-31T23:15:30Z', 170000),
(8, 48, 'actual', '2013-09-04T16:17:51Z', 208000),
(9, 49, 'target', '2013-01-01T23:15:30Z', 0),
(9, 50, 'target', '2013-03-31T23:15:30Z', 291000),
(9, 51, 'target', '2013-06-30T23:15:30Z', 310000),
(9, 52, 'target', '2013-09-30T23:15:30Z', 403000),
(9, 53, 'target', '2013-12-31T23:15:30Z', 490000),
(9, 54, 'actual', '2013-09-04T16:17:51Z', 156000),
(10, 55, 'target', '2013-01-01T23:15:30Z', 0),
(10, 56, 'target', '2013-03-31T23:15:30Z', 177000),
(10, 57, 'target', '2013-06-30T23:15:30Z', 203000),
(10, 58, 'target', '2013-09-30T23:15:30Z', 475000),
(10, 59, 'target', '2013-12-31T23:15:30Z', 710000),
(10, 60, 'actual', '2013-09-04T16:17:51Z', 364000),
(11, 61, 'target', '2013-01-01T23:15:30Z', 0),
(11, 62, 'target', '2013-03-31T23:15:30Z', 18000),
(11, 63, 'target', '2013-06-30T23:15:30Z', 52000),
(11, 64, 'target', '2013-09-30T23:15:30Z', 276000),
(11, 65, 'target', '2013-12-31T23:15:30Z', 620000),
(11, 66, 'actual', '2013-09-04T16:17:51Z', 208000),
(12, 67, 'target', '2013-01-01T23:15:30Z', 0),
(12, 68, 'target', '2013-03-31T23:15:30Z', 46000),
(12, 69, 'target', '2013-06-30T23:15:30Z', 96000),
(12, 70, 'target', '2013-09-30T23:15:30Z', 354000),
(12, 71, 'target', '2013-12-31T23:15:30Z', 390000),
(12, 72, 'actual', '2013-09-04T16:17:51Z', 507000),
(13, 73, 'target', '2013-01-01T23:15:30Z', 0),
(13, 74, 'target', '2013-03-31T23:15:30Z', 178000),
(13, 75, 'target', '2013-06-30T23:15:30Z', 263000),
(13, 76, 'target', '2013-09-30T23:15:30Z', 305000),
(13, 77, 'target', '2013-12-31T23:15:30Z', 350000),
(13, 78, 'actual', '2013-09-04T16:17:51Z', 325000),
(14, 79, 'target', '2013-01-01T23:15:30Z', 0),
(14, 80, 'target', '2013-03-31T23:15:30Z', 479000),
(14, 81, 'target', '2013-06-30T23:15:30Z', 541000),
(14, 82, 'target', '2013-09-30T23:15:30Z', 609000),
(14, 83, 'target', '2013-12-31T23:15:30Z', 630000),
(14, 84, 'actual', '2013-09-04T16:17:51Z', 130000),
(15, 85, 'target', '2013-01-01T23:15:30Z', 0),
(15, 86, 'target', '2013-03-31T23:15:30Z', 151000),
(15, 87, 'target', '2013-06-30T23:15:30Z', 306000),
(15, 88, 'target', '2013-09-30T23:15:30Z', 569000),
(15, 89, 'target', '2013-12-31T23:15:30Z', 860000),
(15, 90, 'actual', '2013-09-04T16:17:51Z', 338000),
(16, 91, 'target', '2013-01-01T23:15:30Z', 0),
(16, 92, 'target', '2013-03-31T23:15:30Z', 323000),
(16, 93, 'target', '2013-06-30T23:15:30Z', 421000),
(16, 94, 'target', '2013-09-30T23:15:30Z', 559000),
(16, 95, 'target', '2013-12-31T23:15:30Z', 700000),
(16, 96, 'actual', '2013-09-04T16:17:51Z', 663000),
(17, 97, 'target', '2013-01-01T23:15:30Z', 0),
(17, 98, 'target', '2013-03-31T23:15:30Z', 671000),
(17, 99, 'target', '2013-06-30T23:15:30Z', 736000),
(17, 100, 'target', '2013-09-30T23:15:30Z', 758000),
(17, 101, 'target', '2013-12-31T23:15:30Z', 760000),
(17, 102, 'actual', '2013-09-04T16:17:51Z', 26000),
(18, 103, 'target', '2013-01-01T23:15:30Z', 0),
(18, 104, 'target', '2013-03-31T23:15:30Z', 593000),
(18, 105, 'target', '2013-06-30T23:15:30Z', 611000),
(18, 106, 'target', '2013-09-30T23:15:30Z', 698000),
(18, 107, 'target', '2013-12-31T23:15:30Z', 820000),
(18, 108, 'actual', '2013-09-04T16:17:51Z', 624000),
(19, 109, 'target', '2013-01-01T23:15:30Z', 0),
(19, 110, 'target', '2013-03-31T23:15:30Z', 487000),
(19, 111, 'target', '2013-06-30T23:15:30Z', 895000),
(19, 112, 'target', '2013-09-30T23:15:30Z', 900000),
(19, 113, 'target', '2013-12-31T23:15:30Z', 900000),
(19, 114, 'actual', '2013-09-04T16:17:51Z', 754000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--

CREATE TABLE IF NOT EXISTS `vendedor` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `goalStatus` varchar(10) NOT NULL,
  `finalTarget` int(8) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=20 ;

--
-- Volcado de datos para la tabla `vendedor`
--

INSERT INTO `vendedor` (`id`, `name`, `goalStatus`, `finalTarget`) VALUES
(1, 'Aaliyah Henry', 'normal', 330000),
(2, 'Aaliyah Nelson', 'normal', 250000),
(3, 'Aaron Harmon', 'normal', 540000),
(4, 'Aaron Welch', 'normal', 690000),
(5, 'Abigail Carr', 'normal', 380000),
(6, 'Abigail Luna', 'normal', 170000),
(7, 'Adam Anderson', 'exceed', 950000),
(8, 'Adam Benton', 'exceed', 170000),
(9, 'Addison Archer', 'normal', 490000),
(10, 'Addison Mitchell', 'normal', 710000),
(11, 'Adrian Keith', 'normal', 620000),
(12, 'Adrian Morgan', 'exceed', 390000),
(13, 'Aiden Chambers', 'normal', 350000),
(14, 'Aiden Morgan', 'normal', 630000),
(15, 'Alex Barr', 'normal', 860000),
(16, 'Alex Gillespie', 'normal', 700000),
(17, 'Alexa Erickson', 'normal', 760000),
(18, 'Alexa Lopez', 'normal', 820000),
(19, 'Alexander Gardner', 'normal', 900000);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
