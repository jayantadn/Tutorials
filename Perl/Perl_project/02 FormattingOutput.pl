my $var = 10;
$num = "12345\n67890";
$str = "This is a big text and will be printed in several lines";

$~ = "MYFORMAT";
$= = 10; # page length
write;

format MYFORMAT =
============================================
Here is the text I want to display:
	number = 	@<<<, @##.##
				$var, $var
Printing a special character:	 @
								"@"
Printing multiline:
@*
"This is first line.\nThis is second line."

Multiline is joined to single line:
^<<<<<<<<<<<<
$num

Text wrapping:
~~ ^<<<<<<<<<<<<<<<<<
$str

Printing many lines:
@*
"This is a block of text\n"
============================================
.


## $^ can be used to change the name of the header format
format STDOUT_TOP =
**************** PAGE @<< ****************
$%
.