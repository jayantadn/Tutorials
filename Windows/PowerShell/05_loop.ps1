# for loop
for( $i=0; $i -lt 10; $i++ ) {
    $i
}

# for each
$arr = @( 10, 20, 30 )
foreach( $var in $arr ) {
    $var
}

# while loop
$i = 1
while( $i -lt 10 ) {
    $i * 100
    $i++
}

# do-while loop
$i = 1
do {
    $i * 1000
    $i++
} while( $i -lt 10 )
