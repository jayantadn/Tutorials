<?php // login.php

$db_hostname = 'localhost';
$db_database = 'phpdb';
$db_username = 'php';
$db_password = 'g%Rf$hj*bC37+';

$db_server = mysql_connect($db_hostname, $db_username, $db_password)
   or die('Cannot connect to MySQL: ' . mysql_error());
mysql_select_db($db_database)
   or die('Cannot select database: ' . mysql_error());
   
?>
