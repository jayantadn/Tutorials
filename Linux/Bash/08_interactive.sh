echo 
echo "echo -e -n"
echo -n "My name is Jayanta"
echo "."
echo -e "this will print the tab \t character"
echo -e "First line. \n second line."

echo
echo "input from user"
echo "enter two text separated by space"
# read var1 var2
echo "var1=$var1 and var2=$var2"

echo
echo "read into standard var"
# read
echo "You have entered $REPLY"

echo
echo "read options"
# read -a arr
# echo "var1=$arr[0] and var2=$arr[1]"
# read -d .		# end of input by . instead of enter
# read -n 5		# read exactly 5 characters
# read -p "Enter something.."	# prompt
# read -s	# dont print what i typed e.g. password
echo -e "\nYou entered $REPLY"

echo
echo "redirect both stdout and stderr to a file"
ls -l * 2> error.txt 1>&2	# 1>&2 essentially copies the contents of stdout to stderr by creating a link between the fds

echo 
echo "creating a file descriptor"
exec 4> output.txt
echo "Hello World!!" >&4


echo
echo "read from a file by hacking the fds"
exec 7<&0	# create backup of stdin
exec < error.txt	# treat a file as stdin
read line	# read first line
read line	# read second line
echo $line
exec 0<&7 7>$-	# restore stdin from backup and close the backup fd
# read -p "Enter something..."	# stdin works normally again
echo $REPLY

echo
echo "take stdin from the script itself"
grep "Jayanta" << EOF
Medha = Team member
Mounika = Team Leader
Jayanta = Architect
EOF














