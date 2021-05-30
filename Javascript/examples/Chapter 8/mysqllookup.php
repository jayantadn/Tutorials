<html><!--  mysqllookup.php -->
   <head>
      <title>Looking up MySQL data</title>
   </head>
   <body>
      <form method='post' action='mysqllookup.php'>
         Enter Username <input type='text' name='username'/>
         <input type='submit' />
      </form>
   
<?php
if (isset($_POST['username']))
{
   require_once 'login.php';
   $u = mysql_sanitize(htmlentities($_POST['username']));

   $query  = "SELECT forename,surname FROM userdetails WHERE username='$u'";
   $result = mysql_query($query);
   if ($result) $rows = mysql_num_rows($result);

   if (!$rows) $display = "Not found";
   else
   {
      $row     = mysql_fetch_row($result);
      $display = "$row[0] $row[1]";
   }
   
   echo "Username: $u - $display";

}

function mysql_sanitize($string)
{
   if (get_magic_quotes_gpc())
      $string = stripslashes($string);
   return mysql_real_escape_string($string);
}
?>
   </body>
</html>
