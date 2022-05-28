-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 28 May 2022, 04:58:37
-- Sunucu sürümü: 10.4.24-MariaDB
-- PHP Sürümü: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `inventlibrary`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `score` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `books`
--

INSERT INTO `books` (`id`, `name`, `score`) VALUES
(7, 'Yeraltından Notlar', '0.00'),
(8, 'Şeker Portakalı', '5.00'),
(9, 'Sonsuzluğun Mesajı', '0.00'),
(10, 'Adam', '4.00'),
(11, 'Tanrılara Karşı', '0.00');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `past`
--

CREATE TABLE `past` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `books_id` int(11) NOT NULL,
  `score` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `past`
--

INSERT INTO `past` (`id`, `user_id`, `books_id`, `score`) VALUES
(17, 10, 8, '6.00'),
(18, 8, 10, '4.00'),
(19, 8, 8, '4.00'),
(20, 8, 10, '4.00');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `present`
--

CREATE TABLE `present` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `books_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `present`
--

INSERT INTO `present` (`id`, `user_id`, `books_id`) VALUES
(23, 8, 11),
(25, 10, 9);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`id`, `name`) VALUES
(8, 'Ekin'),
(9, 'Aysun'),
(10, 'Kemal'),
(11, 'Aslı'),
(12, 'Barış');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `past`
--
ALTER TABLE `past`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `present`
--
ALTER TABLE `present`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Tablo için AUTO_INCREMENT değeri `past`
--
ALTER TABLE `past`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Tablo için AUTO_INCREMENT değeri `present`
--
ALTER TABLE `present`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
