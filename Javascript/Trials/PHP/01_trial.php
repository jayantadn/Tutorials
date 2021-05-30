<?php

define( "HELLO", "Hello World!!!" );

// echo HELLO;

$arr = array( 10, 20, 30, 40, 50 );
foreach( $arr as $var )
{
	// echo $var . "<br>";
}

$age = array( "Jayanta" => 35, "Champa" => 33, "Sushanta" => 34 );
// echo $age["Sushanta"];

$arrm = array( array(1,2,3), array(10,20,30) );
// echo $arrm[1][2];

// echo getenv( "HTTP_USER_AGENT" );
echo $_POST["name"] . "<br>";
?>
<html>
<body>
	<form action="<?php $_PHP_SELF ?>" method="POST">
		Name: <input type="text" name="name" />
		<input type="submit" />
	</form>
</body>
</html>
