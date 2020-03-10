-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Máquina: localhost
-- Data de Criação: 20-Fev-2020 às 23:24
-- Versão do servidor: 5.6.13
-- versão do PHP: 5.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de Dados: `acha-trampo`
--
CREATE DATABASE IF NOT EXISTS `acha-trampo` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `acha-trampo`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `prestador`
--

CREATE TABLE IF NOT EXISTS `prestador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) DEFAULT NULL,
  `apelido` varchar(30) NOT NULL,
  `idade` int(11) DEFAULT NULL,
  `area` varchar(50) DEFAULT NULL,
  `telefone` varchar(30) NOT NULL,
  `celular` varchar(30) DEFAULT NULL,
  `rg` varchar(30) DEFAULT NULL,
  `cpf` varchar(30) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `senha` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `rg` (`rg`),
  UNIQUE KEY `celular` (`celular`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `senha` (`senha`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
