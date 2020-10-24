echo "simple for loop"
for var in `ls -a`
do
    echo $var
done

echo
echo 'while loop'
i=0
while [ $i -lt 10 ]
do
	echo $i
	let i++
done

# echo
# echo "break"
# while true
# do
	# read -p "Enter your name. Press x to exit.  "
	# if [ $REPLY == "x" ]
	# then
		# break
	# else
		# echo "Your name is $REPLY"
	# fi
# done

echo "reading file line by line"
while read line
do
	echo $line
done < file.txt

echo
echo "menu using select"
PS3="Select one of the files: "
select var in *		
# select var in "Option1" "Option2" "Option3" # List is basically space separated strings
do
	if [ $var == "file.txt" ]
	then
		echo "Exiting."
		break;
	else
		echo "You selected - $var"
	fi
done



