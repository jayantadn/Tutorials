<?php // robsgetchat.php

require_once 'login.php';

$latest = VerifyUser();
$output = '';
$cond   = "num>$latest AND";

if ($latest < 0) die('Error');

if (isset($_POST['f'])) $cond = '';

$query = "SELECT * FROM chat WHERE $cond (sender='$uname' OR " .
         "recip='$uname' OR recip = 'ALL') ORDER BY num DESC LIMIT 50";
$result = mysql_query($query);

if ($result)
{
   $rows  = mysql_num_rows($result);

   if ($rows < 1) return;

   for ($j = 0 ; $j < $rows ; ++$j)
   {
      $row  = mysql_fetch_row($result);
      $from = $row[1];
      $to   = $row[2];
      $mess = $row[3];

      if ($j == 0) $latest = $row[0];

      if ($to == 'ALL')
         $output = "<table border='0' cellpadding='0' cellspacing="    .
            "'0' width='100%'><tr valign='top'><td width='25%' align=" .
            "'right' class='user' ontouchstart=\"SendPM('$from');\">"  .
            "$from</td><td>$mess</td></tr></table>\n" . $output;
      else if ($uname == $from || $uname == $to)
          $output = "<table class='pm' border='0' cellpadding='0' "    .
            "cellspacing='0' width='100%'><tr valign='top'><td width=" .
            "'25%' align='right' class='user' ontouchstart=\"SendPM("  .
            "'$from');\">$from</td><td>to <span class='user' "         .
            "ontouchstart=\"SendPM('$to');\">$to</span>$mess</td>"     .
            "</tr></table>\n" . $output;
   }
   $query = "UPDATE users SET latest='$latest' WHERE username='$uname'";
   mysql_query($query);
}

die ($output);
   
function VerifyUser()
{
   global $uname;

   if (isset($_POST['u'])) $uname = MySQL_Sanitize($_POST['u']);
   if (isset($_POST['p'])) $pword = MySQL_Sanitize($_POST['p']);

   if (strlen($uname) == 0 || strlen($pword) == 0) return -1;

   $query  = "SELECT password,latest FROM users WHERE username='$uname'";
   $result = mysql_query($query);
   $row    = mysql_fetch_row($result);
   $pw     = md5('s.a.l.t' . $pword . 'H*df$£');

   if ($pw != $row[0]) return -1;
   return $row[1];
}

function MySQL_Sanitize($string)
{
   if (get_magic_quotes_gpc())
      $string = stripslashes($string);
   return mysql_real_escape_string($string);
}

?>
