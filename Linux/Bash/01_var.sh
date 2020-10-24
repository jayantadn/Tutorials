#!/usr/bin/bash

echo "Hello World"

# quoting a variable preserves whitespaces
var="A B  C   D"
echo $var		# this is the short form of ${var}
echo "$var"

echo '$var'

# setting variable to NULL
var=
echo $var

# print a black line
echo

var1=10 var2=20 var3=30
echo $var1 $var2 $var3

# str="This is India"
str=This\ is\ India
echo $str

# no error for var not exist
echo $not_exist

unset str
if [ -z $str ] # -z check for null string or zero length string
then
	echo "str is unset"
fi

# arithmetic operation on uninitialized value
echo $num
let num++ # you can do arithmetic operation with let statement
echo $num

let a=10+5
echo $a

# option -n is for not printing \n at the end
echo -n "Do not print trailing newline character."
echo ' <-- proof'

echo -n "Enter your name: "
# read name
echo "Your name is $name"

a=`echo Hello!`		# directly from command line (!) will not work
echo $a

# String replacement
a=2334
b=${a/23/BB}
echo $b

# integer operation on null variable
a=
let a++
echo $a

# integer operation on a undeclared variable
echo $u
let u++
echo $u

# parameters to the script 
echo $0		# script name
echo `basename $0`	# only print the filename, strip directory path

if [ -n "$1" ]  # if [ -n $1 ] will not work. I would prefer if [ -z $1 ]
then
	echo "The script has parameters"
	echo ${10}		# Parameters > $9 must be enclosed in {brackets}.
	echo "Number of command line parameters: $#"
	echo "All command line parameters: $*"
	echo "The last parameter is: ${!#}"
else
	echo "The script does not have any parameters"
fi

shift		# $1 <--- $2, $2 <--- $3, $3 <--- $4, etc.
# shift 2
echo $1 $2

# print multiple lines to console
cat << EOF
This is the first line.
Another line now.
EOF
