<?php // robspost.php

require_once 'login.php';

if (VerifyUser() < 0) die('Error');

if ($mess != '' )
{
   $query = "INSERT INTO chat VALUES(null, '$uname', '$to', '$mess')";
   mysql_query($query);
}

function VerifyUser()
{
   global $uname;
   global $to;
   global $mess;

   if (isset($_POST['u'])) $uname = mysql_sanitize($_POST['u']);
   if (isset($_POST['p'])) $pword = mysql_sanitize($_POST['p']);
   if (isset($_POST['t'])) $to    = mysql_sanitize($_POST['t']);
   if (isset($_POST['m'])) $mess  = mysql_sanitize($_POST['m']);

   if (strlen($uname) == 0 || strlen($pword) == 0) return -1;

   $query  = "SELECT password,latest FROM users WHERE username='$uname'";
   $result = mysql_query($query);
   $row    = mysql_fetch_row($result);
   $pw     = md5('s.a.l.t' . $pword . 'H*df$£');

   if ($pw != $row[0]) return -1;
   return $row[1];
}

function mysql_sanitize($string)
{
   if (get_magic_quotes_gpc())
      $string = stripslashes($string);
   return mysql_real_escape_string(htmlentities($string));
}

?>
