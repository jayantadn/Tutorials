function func
{
	echo "Hello Function"
	echo "Script name: $0"
	echo "Function name: $FUNCNAME"
	echo "Number of parameters: $#"
	
	if [ $# -eq 0 ]
	then
		echo "You did not pass any parameters"
		return 2
	else
		echo "Parameter passed: $1"
	fi
}

func 1
echo "Return value of function: $?"

echo
echo "function defined in another file"
source ./functions.sh
func2
