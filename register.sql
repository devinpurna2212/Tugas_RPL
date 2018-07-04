-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2018 at 09:15 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `register`
--

-- --------------------------------------------------------

--
-- Table structure for table `crud`
--

CREATE TABLE `crud` (
  `id` int(11) NOT NULL,
  `nim` varchar(10) NOT NULL,
  `jumlahkaleng` int(11) NOT NULL,
  `jbotol500` int(11) NOT NULL,
  `jbotol500atas` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `currentdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `lastdate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crud`
--

INSERT INTO `crud` (`id`, `nim`, `jumlahkaleng`, `jbotol500`, `jbotol500atas`, `harga`, `currentdate`, `lastdate`) VALUES
(6, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'G64160000', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'G64160000', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'G64160001', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'G64610009', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'G64160000', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'G64160000', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, '122312e13', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, '', 0, 0, 0, 0, '2018-06-30 03:19:23', '0000-00-00 00:00:00'),
(38, '', 0, 0, 0, 0, '2018-06-30 03:21:11', '0000-00-00 00:00:00'),
(39, '', 0, 0, 0, 0, '2018-06-30 03:23:50', '0000-00-00 00:00:00'),
(40, '', 0, 0, 0, 0, '2018-06-30 03:23:59', '0000-00-00 00:00:00'),
(41, '', 0, 0, 0, 0, '2018-06-30 03:27:48', '0000-00-00 00:00:00'),
(42, 'G64160048', 1, 3, 2, 1000, '2018-06-30 03:33:39', '0000-00-00 00:00:00'),
(43, 'G64160048', 1, 3, 2, 1000, '2018-06-30 03:34:13', '0000-00-00 00:00:00'),
(44, 'G64160048', 1, 3, 2, 1000, '2018-06-30 03:34:59', '0000-00-00 00:00:00'),
(45, 'G64160048', 1, 3, 2, 1000, '2018-06-30 03:35:07', '0000-00-00 00:00:00'),
(46, 'G64160048', 1, 3, 2, 1000, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(47, 'G64160048', 1, 3, 2, 1000, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, '', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, 'G64160047', 1, 3, 2, 1000, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(50, 'G64160047', 1, 3, 2, 1000, '2018-06-30 03:46:54', '0000-00-00 00:00:00'),
(51, 'G64160047', 1, 3, 2, 1000, '2018-06-30 03:47:39', '2018-06-30 03:47:46'),
(52, 'G64160047', 1, 3, 2, 1000, '2018-06-30 03:49:09', '0000-00-00 00:00:00'),
(53, 'G64160047', 1, 3, 2, 1000, '2018-06-30 03:49:51', '2018-06-30 03:50:11'),
(54, 'G64160048', 0, 0, 0, 1000, '2018-06-30 07:07:50', '2018-06-30 07:08:10'),
(55, '', 0, 0, 0, 0, '2018-07-01 04:39:40', '2018-07-01 04:40:00'),
(56, '', 0, 0, 0, 0, '2018-07-01 04:39:40', '2018-07-01 04:40:00');

-- --------------------------------------------------------

--
-- Table structure for table `insertbarang`
--

CREATE TABLE `insertbarang` (
  `id` int(11) NOT NULL,
  `nim` varchar(20) NOT NULL,
  `jumlahkaleng` int(11) NOT NULL,
  `jbotol500` int(11) NOT NULL,
  `jbotol500atas` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `currentdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `lastdate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `insertbarang`
--

INSERT INTO `insertbarang` (`id`, `nim`, `jumlahkaleng`, `jbotol500`, `jbotol500atas`, `harga`, `currentdate`, `lastdate`) VALUES
(1, 'G64160048', 0, 0, 0, 300, '2018-07-02 12:25:06', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `fullname`, `username`, `email`, `password`) VALUES
(10, 'Husna Nurarifah', 'unacantik', 'taminuriksa@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(11, 'husna n', 'husna', 'husna@gmail.com', '1234'),
(12, 'kiniku', 'cinta', 'tlahjatuh@gmail.com', 'ihiw'),
(13, 'Husna YYY', 'yesh', 'husna.nna@gmail.com', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crud`
--
ALTER TABLE `crud`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `insertbarang`
--
ALTER TABLE `insertbarang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `crud`
--
ALTER TABLE `crud`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `insertbarang`
--
ALTER TABLE `insertbarang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
