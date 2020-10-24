############ Basic Syntax ##############

print("Hello World", " ", 1);

my $inputline = <STDIN>;
print( $inputline );

my $var1 = 10;
my $var2 = $var1 * 2;
chop( $var2 ); # removes the last character from a string
print( $var2 );

print( "enter a number: " );
$var2 = <STDIN>;
if( $var2 > 0 )
{
	print( "positive" );
}
elsif ($var2 < 0)
{
	print( "negative" );
}
else
{
	print( "zero" );
}

$cnt = 10;
while( $cnt > 0)
{
	print( $cnt, "\n" );
	$cnt--;
}

until( $cnt > 10 )
{
	print( $cnt, "\n" );
	$cnt++;
}

$var = 10;
print( "the number is $var" );

$str = "tHis IS a lINE";
print( "uppercase: \U$str\n");
print( "lowercase: \L$str\n");
$str = 'this is a single quoted line \n';
print( $str );

print( 20 <=> 10, "\n" );
print( 10 <=> 20, "\n" );
print( 10 <=> 10, "\n" );
print( "xxx" eq "xxx" );

$str = "head" . "tail" . 5;
$str .= "\n";
print( $str x 5 );

@arr = ( 1, 2, 3 );
$arr[3] = 4;
print( $arr[3] );

print( "random number: ", rand(100) );

@arr = (1..10);
($var1, $var2) = @arr;
print $var1, $var2;
@arr = ("a".."z");
@arr = ("01".."31");
print( $arr[4] );
print "@arr";	# print the complete array
$var1 = @arr;	# size of array
$var2 = @arr;
print $var1;
#print "@arr[0..5]";
#print "@arr[0,1]";
@arr = (0..4);
print "@arr\n";
@arr[1..2] = ( 5, 6 );
print "@arr\n";
@arr[1..2] = ( 5, 6, 7 );
print "@arr\n";
#@arr[1..2] = ( 5 );
print "@arr\n";

## ARRAY OPERATIONS ##
@list = ( "Apple", 0, "Mango" );
@list = grep (/[a-z]/, @list);
print "@list";

@arr = (0..10);
print "@arr", "\n";
@miniarr = ( 'x', 'y', 'z' );
splice ( @arr, 1, 3, @miniarr); # this will remove the existing elements
print "@arr", "\n";
splice ( @arr, 0, 0, ('q', 'r', 't')); # this will not overwrite anything
print "@arr", "\n";
splice ( @arr, 7, 2); # delete 2 elements
print "@arr", "\n";

@arr = (0..10);
shift @arr;
push @arr, (11, 12);
pop @arr;
print "@arr";

@arr = split /-/, "09-04-2014";
foreach $var (@arr)
{
	print $var, "\n";
}


print 1 if 1;
print( "$var\n" ) while( $var++ < 10 );

for( $i=0, $j=9; $i<10; $i++, $j-- )
{
	print "$i $j \n";
}

@arr = (1..10);
$arr = 50;
foreach $arr (@arr)
{
	print "$arr\n";
	$arr *= 10;
}
print "$arr\n";
print "@arr\n";

$str = "This is a line";
@arr = split( ' ', $str );
@arr = sort @arr;
@arr = reverse @arr;
foreach $arr (@arr)
{
	print "$arr\n";
}

while( 1 )
{
	print ( $cnt++, "\n" );
	last if $cnt==10;
}

for( $cnt=0; $cnt<10; $cnt++ )
{
	next if $cnt==5;
	print $cnt;
}

for( $cnt=0; $cnt<10; $cnt++ )
{
	$var = rand 10;
	redo if $var < 5; #only 5 or more will be printed
	print $cnt, " = ", $var, "\n";
}

DONE: while(1)
{
	while( $cnt++ )
	{
		print $cnt, "\n";
		last DONE if $cnt > 10;
	}
}











