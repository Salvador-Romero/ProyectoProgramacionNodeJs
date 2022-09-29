-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-09-2022 a las 04:10:27
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurante`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_archivos`
--

CREATE TABLE `usuarios_archivos` (
  `id` int(11) NOT NULL Auto_INCREMENT,
  `USUARIO_ID` int(11) NOT NULL,
  `Nombre_Archivo` varchar(250) NOT NULL,
  `Tipo_Archivo` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios_archivos`
--

INSERT INTO `usuarios_archivos` ( `USUARIO_ID`, `Nombre_Archivo`, `Tipo_Archivo`) VALUES
( 1, 'Doc1.pdf', 'Identificación oficial'),
( 5, 'recibodsgabi.pdf', 'Estado de cuenta bancario'),
( 5, 'recibodsgabi.pdf', 'Comprobante de domicilio'),
( 3, 'Doc1.pdf', 'Estado de cuenta bancario'),
( 8, 'ReciboPago.pdf', 'Identificación oficial'),
( 4, 'Sin título.png', 'Escritura');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios_archivos`
--
ALTER TABLE `usuarios_archivos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios_archivos`
--
ALTER TABLE `usuarios_archivos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
