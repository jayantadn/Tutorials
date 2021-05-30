<?php

if( $_POST["location"] )
{
	header( "Location:" . $_POST["location"] );
	exit();
}

?>

<html>
<head>
    <title></title>
</head>
<body>
    <div>
	
	<form action="<?php $_PHP_SELF ?>" method="POST">
		<input type="text" name="location" />
		<input type="submit" />
	</form>
	
	</div>
</body>
</html>

