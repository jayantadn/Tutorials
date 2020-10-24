echo
echo "variable types"
declare -i var_int
var_int=10
var_int=string
echo $var_int
declare -p var_int

readonly CURDIR=$PWD
CURDIR="something else"
echo $CURDIR
readonly	# all readonly variables are displayed

echo
echo "array"
arr=("one" "two" "three")
echo ${arr[1]}
arr[2]="Four"
unset arr[1]
echo ${arr[*]}

echo
echo "loop through an array"
arr=("one" "two" "three")
for var in ${arr[*]}
do
	echo $var
done

echo
echo "number of variables"
echo ${#CURDIR}
echo ${#arr}
echo ${#@}

echo
echo "set a variable if not already set"
echo ${var_int:-55}	# replace - with = if the variable does not exist

echo
echo "exercise"
echo "name of script is $0"
echo $1 $3 $10
echo $#
if [ $# -gt 3 ]
then
	shift 3
	echo $*
fi	


















