<?php // robslogin.php

require_once 'login.php';

if (isset($_POST['u'])) $uname = mysql_sanitize($_POST['u']);
if (isset($_POST['p'])) $pword = mysql_sanitize($_POST['p']);

if (strlen($uname) == 0 || strlen($pword) == 0) die ('Error');

$query  = "SELECT password FROM users WHERE username='$uname'";
$result = mysql_query($query);
$rows   = mysql_num_rows($result);
$pw     = md5('s.a.l.t' . $pword . 'H*df$£');

if (!$rows)
{
   $query = "INSERT INTO users VALUES('$uname', '$pw', 0)";
   if (mysql_query($query)) die('Valid');
   die('Error');
}
else
{
   $row = mysql_fetch_row($result);
   if ($pw == $row[0]) die('Valid');
   else                die('Invalid');
}

function mysql_sanitize($string)
{
   if (get_magic_quotes_gpc())
      $string = stripslashes($string);
   return mysql_real_escape_string($string);
}

?>
