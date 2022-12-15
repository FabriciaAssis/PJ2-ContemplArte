<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "traca_books";

try {
  $conn = new PDO("mysql:host=$servername; dbname=$database", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //echo "Banco Conectado!";
} catch(PDOException $e) {
  echo "connection failed: " . $e->getMessage();
}
?>