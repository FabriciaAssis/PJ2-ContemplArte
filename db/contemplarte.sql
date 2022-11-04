-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 05-Nov-2022 às 00:32
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contemplarte`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadbatalha`
--

CREATE TABLE `cadbatalha` (
  `grpome` varchar(100) NOT NULL,
  `integrantesnum` int(10) NOT NULL,
  `email` varchar(200) NOT NULL,
  `cidade` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `firstcad`
--

CREATE TABLE `firstcad` (
  `pnome` varchar(100) NOT NULL,
  `sbrnome` varchar(100) NOT NULL,
  `cpf` int(12) NOT NULL,
  `email` varchar(200) NOT NULL,
  `sexo` char(2) NOT NULL,
  `senha` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `incgeral`
--

CREATE TABLE `incgeral` (
  `pnome` varchar(100) NOT NULL,
  `sbrnome` varchar(200) NOT NULL,
  `cpf` int(12) NOT NULL,
  `dataNas` date NOT NULL,
  `sexo` char(2) NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `firstcad`
--
ALTER TABLE `firstcad`
  ADD PRIMARY KEY (`cpf`);

--
-- Indexes for table `incgeral`
--
ALTER TABLE `incgeral`
  ADD PRIMARY KEY (`cpf`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `firstcad`
--
ALTER TABLE `firstcad`
  MODIFY `cpf` int(12) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `incgeral`
--
ALTER TABLE `incgeral`
  MODIFY `cpf` int(12) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
