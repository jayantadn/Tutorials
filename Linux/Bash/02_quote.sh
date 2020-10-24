#!/bin/bash

var=10
echo "$var"

List="one two three"
# for a in $List	# List is now an array
for a in "$List"	# List is now a single word
do
	echo $a
done

# did not work
var=""
# bash 01_var.sh $var
# bash 01_var.sh "$var"

echo "Why can't I learn bash script faster?"

echo '\043'	# octal character
# echo '\x25'	# hex - did not work

echo "This will print 
as two lines"

echo "This will print \
as single lines"

echo "\v"
# echo -e "\v"	# did not work

# read -s -N1 -p "Press a key: "	# with the -N1 option, we dont have to press enter
# if [ $REPLY == '\x7f' ]		# hex value did not work
# then
	# echo "You have pressed delete key"
# else
	# echo "You did not press delete key"
# fi

# spaces in parameters
# bash 01_var.sh /bin\ /sh

# multi line commands
ls \
-l

# the following will be printed in a single line
echo foo\
bar