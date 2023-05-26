-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2023 at 04:14 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tubespweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `bayarzakats`
--

CREATE TABLE `bayarzakats` (
  `id` int(11) NOT NULL,
  `nama_kk` varchar(255) NOT NULL,
  `jml_tanggungan` int(11) NOT NULL,
  `jenis_bayar` varchar(255) NOT NULL,
  `jmlDibayar` float NOT NULL,
  `beras` float DEFAULT NULL,
  `uang` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `MuzakkiId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bayarzakats`
--

INSERT INTO `bayarzakats` (`id`, `nama_kk`, `jml_tanggungan`, `jenis_bayar`, `jmlDibayar`, `beras`, `uang`, `createdAt`, `updatedAt`, `MuzakkiId`) VALUES
(7, 'syahidan', 3, 'uang', 90000, 0, 90000, '2023-05-02 14:52:39', '2023-05-02 14:52:39', 2),
(9, 'alfarra', 4, 'beras', 10, 10, 0, '2023-05-09 12:47:05', '2023-05-09 12:47:05', 3),
(10, 'syahidan', 3, 'uang', 90000, 0, 90000, '2023-05-24 00:29:13', '2023-05-24 00:29:13', 2),
(11, 'syahidan', 3, 'uang', 90000, 0, 90000, '2023-05-24 00:29:59', '2023-05-24 00:29:59', 2);

-- --------------------------------------------------------

--
-- Table structure for table `kategorimustahiks`
--

CREATE TABLE `kategorimustahiks` (
  `id` int(11) NOT NULL,
  `nama_kat` varchar(255) NOT NULL,
  `jml_hak` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategorimustahiks`
--

INSERT INTO `kategorimustahiks` (`id`, `nama_kat`, `jml_hak`, `createdAt`, `updatedAt`) VALUES
(1, 'fakir', 10, '2023-05-02 16:51:34', '2023-05-24 03:10:05'),
(2, 'miskin', 9, '2023-05-02 16:51:34', '2023-05-24 03:11:31'),
(3, 'amil', 8, '2023-05-22 04:10:42', '2023-05-24 03:11:37'),
(4, 'mualaf', 7, '2023-05-22 04:10:42', '2023-05-24 03:12:14'),
(5, 'riqab', 6, '2023-05-22 04:10:42', '2023-05-24 03:12:08'),
(6, 'gharim', 5, '2023-05-22 04:10:42', '2023-05-24 03:12:19'),
(7, 'fi sabilillah', 4, '2023-05-22 04:10:42', '2023-05-24 03:12:24'),
(8, 'ibnu sabil', 4, '2023-05-22 04:10:42', '2023-05-24 03:12:29');

-- --------------------------------------------------------

--
-- Table structure for table `mustahiks`
--

CREATE TABLE `mustahiks` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `hak` float DEFAULT NULL,
  `beras` float DEFAULT NULL,
  `uang` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mustahiks`
--

INSERT INTO `mustahiks` (`id`, `nama`, `kategori`, `hak`, `beras`, `uang`, `createdAt`, `updatedAt`) VALUES
(2, 'eer', 'miskin', 60000, 0, 60000, '2023-05-02 15:00:26', '2023-05-02 15:00:26'),
(3, 'asui', 'fakir', 30000, 0, 30000, '2023-05-09 01:34:56', '2023-05-09 01:34:56'),
(4, 'hapis', 'fi sabilillah', 5, 5, 0, '2023-05-22 02:14:46', '2023-05-22 02:15:13'),
(12, 'hapis', 'fakir', 5, 5, 0, '2023-05-24 01:06:32', '2023-05-24 01:06:32'),
(13, 'hajis', 'fakir', 5, 0, 150000, '2023-05-24 01:09:02', '2023-05-24 01:09:02');

-- --------------------------------------------------------

--
-- Table structure for table `muzakkis`
--

CREATE TABLE `muzakkis` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `jmlTanggungan` int(11) NOT NULL,
  `ket` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `BayarZakatId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `muzakkis`
--

INSERT INTO `muzakkis` (`id`, `nama`, `jmlTanggungan`, `ket`, `createdAt`, `updatedAt`, `BayarZakatId`) VALUES
(1, 'zulfan', 1, 'blabla', '2023-05-02 14:04:34', '2023-05-02 14:04:34', NULL),
(2, 'syahidan', 3, 'yeahhh buddy', '2023-05-02 14:05:16', '2023-05-02 14:50:54', NULL),
(3, 'alfarra', 4, 'warga ngontrak', '2023-05-09 02:15:44', '2023-05-09 12:42:10', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'zulfan', '$2b$10$lgC9lUIXPnKhDgJOnJnl5.jbggvckjuMkh1Oywjh7g1SItXf2ONyi', '2023-05-02 14:59:42', '2023-05-02 14:59:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bayarzakats`
--
ALTER TABLE `bayarzakats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `MuzakkiId` (`MuzakkiId`);

--
-- Indexes for table `kategorimustahiks`
--
ALTER TABLE `kategorimustahiks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mustahiks`
--
ALTER TABLE `mustahiks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `muzakkis`
--
ALTER TABLE `muzakkis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BayarZakatId` (`BayarZakatId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bayarzakats`
--
ALTER TABLE `bayarzakats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `kategorimustahiks`
--
ALTER TABLE `kategorimustahiks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `mustahiks`
--
ALTER TABLE `mustahiks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `muzakkis`
--
ALTER TABLE `muzakkis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bayarzakats`
--
ALTER TABLE `bayarzakats`
  ADD CONSTRAINT `BayarZakats_MuzakkiId_foreign_idx` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_1` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_10` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_11` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_12` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_13` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_14` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_15` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_16` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_17` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_18` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_19` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_2` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_20` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_21` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_22` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_23` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_24` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_25` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_26` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_27` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_28` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_29` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_3` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_30` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_31` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_32` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_4` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_5` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_6` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_7` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_8` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bayarzakats_ibfk_9` FOREIGN KEY (`MuzakkiId`) REFERENCES `muzakkis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `muzakkis`
--
ALTER TABLE `muzakkis`
  ADD CONSTRAINT `muzakkis_ibfk_1` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_10` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_11` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_12` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_13` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_14` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_15` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_16` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_17` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_18` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_19` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_2` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_20` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_21` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_22` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_23` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_24` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_25` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_26` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_27` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_28` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_29` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_3` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_30` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_31` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_32` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_33` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_34` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_4` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_5` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_6` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_7` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_8` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `muzakkis_ibfk_9` FOREIGN KEY (`BayarZakatId`) REFERENCES `bayarzakats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
