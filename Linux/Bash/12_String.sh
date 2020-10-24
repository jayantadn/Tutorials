echo
echo "substring"
echo $CURDIR
echo ${CURDIR:5:10}	# offset, length
echo ${arr[*]#one}	# remove a starting pattern from array
echo ${arr[*]#t}	# remove a starting pattern from array
echo ${arr[*]##t*}	# remove a starting pattern from array
echo ${arr[*]%%e*}	# remove a trailing pattern from array
echo ${CURDIR//Linux/Windows}	# pattern replacement. single / is for replacing single match, double / is for matching all
