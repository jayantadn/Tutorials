<?php

$filename = "textfile.txt";
$size = filesize( $filename );

// $fdesc = fopen( $filename, "r" );
// if( $fdesc == false )
// {
	// echo( "File could not be opened" );
	// exit();
// }

// echo fread( $fdesc, $size );
// fclose( $fdesc );

$fdesc = fopen( $filename, "a+" );
if( $fdesc == false )
{
	echo( "File could not be opened" );
	exit();
}

fwrite( $fdesc, "This is some new text" );
fclose( $fdesc );


?>
