# if condition just checks the return value of a command
if echho 
then
	echo "Command was successful"
else
	echo "Command could not be executed"
fi

# check if file exist
if [ -e Bash-Beginners-Guide.pdf ] # -a also works
then
	echo "File exists"
fi

# check if directory
if [ -d /tmp ]
then
	echo "Its a directory"
fi

# check zero length string
if [ -z "some text" ]
then
	echo "String is empty"
else
	echo "String has some value"
fi

# string comparison
if [ "string" == "string" ]
then
	echo "strings are equal"
fi

# number comparison
if [ 2 -gt 1 ]
then
	echo "greater"
fi

# check exit status of previous command
# echo "Hello World"
cat /tmp/somefile
if [ $? -eq 0 ]
then
	echo "Previous command exited successfully"
else
	echo "There was an error in the previous command"
fi
	
# negation
if ! grep $USER /etc/passwd
then
	echo "your account is not managed locally"
fi

# shortened if condition
[ 2 -gt 1 ] && echo "test successful"

# command line arguments
echo "Number of arguments: $#"
echo "script name: $0"

echo 
echo "details of a file"
if [ -e nutmix.csv ]
then
	ls -lh nutmix.csv | awk '{ printf "file=%s \n", $9 }'
	ls -lh nutmix.csv | awk '{ printf "size=%s \n", $5 }'
	file nutmix.csv | awk 'BEGIN { FS=":" } { printf "type=%s \n", $2 }'
else
	echo "File does not exist"
fi

echo
echo "elif"
if [ 2 -gt 2 ]
then
	echo "if path"
elif [ 2 -eq 2 ]
then
	echo "elif path"
else
	echo "else path"
fi

echo
echo "multiple IF"
# if [ 3 -gt 1 ] && [ 3 -lt 5 ]
if [ 3 -gt 1 -a 3 -lt 5 ]	# -o for or
then
	echo "test successful"
else
	echo "test failed"
fi

echo
echo "exit status"
# exit 2	# check with echo $?

echo
echo "case"
echo "press 1-4"
# read choice
case $choice in
1)
	echo "You have pressed 1"
	;;
[2-3])
	echo "You have pressed 2 or 3"
	;;
4)
	echo "You have pressed 4"
	;;
text)
	echo "You have typed text"
	;;
*)
	echo "you pressed something else"
	;;
esac

echo
echo "exercise 1"
month=`date | awk 'BEGIN { FS="," } { print $2 }' | awk '{ print $1 }'`
case $month in
Jan | Mar | May | Jul | Aug | Oct | Dec)
	echo "Number of days in month $month is 31"
;;
Feb)
	year=`date | awk '{ print $4 }'`
	let leap=$year%4
	if [ $leap -eq 0 ]
	then
		echo "Number of days in month $month is 29"
	else
		echo "Number of days in month $month is 28"
	fi
;;
Apr)
	echo "Number of days in month $month is 30"
;;
*)
	echo "Unknown month"
esac

echo
echo "Command chaining after single line if"
# grouping commands using {} invokes them in the same shell
# grouping commands using () invokes them in new shell
[ -f "$1" ] || { echo "ERROR: Invalid parameter"; read; exit; }




















