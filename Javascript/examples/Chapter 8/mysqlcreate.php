<?php // mysqlcreate.php

require_once 'login.php';

$usernames = array(
   array('thepresident', 'iamprez',    'Barack',    'Obama'),
   array('elizabeth',    'oneisqueen', 'Elizabeth', 'Windsor'),
   array('superrich',    'windoz',     'Bill',      'Gates'),
   array('genius',       'e=mc2',      'Albert',    'Einstein'),
   array('onebutton',    'magical',    'Steve',     'Jobs'));

$query =
   "CREATE TABLE IF NOT EXISTS userdetails(\n" .
   "   username VARCHAR(16),\n" .
   "   password CHAR(32),\n"    .
   "   forename VARCHAR(32),\n" .
   "   surname VARCHAR(32),\n" .
   "   UNIQUE INDEX(username(6)),\n"   .
   "   INDEX(forename(8)),\n"   .
   "   INDEX(surname(8))\n)";

$result = mysql_query($query);
if ($result) echo 'Table now created (or already exists).<br />';

for ($j = 0 ; $j < 5 ; ++$j)
{
   $u = $usernames[$j][0];
   $p = $usernames[$j][1];
   $f = $usernames[$j][2];
   $s = $usernames[$j][3];
   $query = "INSERT INTO userdetails VALUES('$u', '$p', '$f', '$s')";

   $result = mysql_query($query);
}

echo 'Users now added (or already present).<br />';

?>
