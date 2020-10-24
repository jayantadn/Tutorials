####### Subroutine ########

## 01 ##
sub subroutine; # function declaration

subroutine;
print $var;

sub subroutine() # function definition
{
	$var = 10;
}


## 02 ##

sub routine()
{
	"This is some text"; # the last statement is the return value
}

$str = routine;
print $str;


## 03 ##

$var = 5;
sub routine()
{
	print "enter subroutine\n";
	local ( $arg1 ) = @_;
	local $var = 10;
	print $arg1;
	print "exit subroutine\n";
	return "This is some text";
}

$str = &routine( $var );
print $str, $var;

## 04 ##

sub routine()
{
	local ( @arg1 ) = @_;
	print @arg1;
}

&routine( 1, 2, 3 );


## 05 argument passed by reference ##
sub routine()
{
	local (*arr) = @_;
	$arr[0] = 10;
}

@arr = ( 1,2,3 );
&routine( *arr );
print @arr;

print "You are inside the main program\n";
&routine();

BEGIN
{
	print "You are inside the constructor\n";
}

END
{
	print "You are inside the destructor\n";
}

AUTOLOAD # called when the program cant find the subroutine
{
	print "sub $AUTOLOAD not found\n";
}











