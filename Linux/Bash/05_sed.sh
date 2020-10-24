#!/bin/bash

VAR=$(cat << EOF
- revert all test script, build script, debug.hpp, main.cpp modifications
- delete all cout, printf and iostream statements
- doxygen for changed code
- README.md and *.md file changes under doc folder
- execute integration test cases in linux, see difference in log
update project config
- check qnx exm build
- verify all changes in "Diff" view of bitbucket
- trigger build in bitbucket
EOF
)

# cat -n file.txt

echo
echo "print lines containing the word 'all'"
echo "$VAR" | sed -n '/all/p' # -n is for printing the line number
 
echo
echo "print lines NOT containing the word 'all'"
echo "$VAR" | sed '/all/d'
 
echo
echo "print lines starting with 'update' and ending with 'config'"
echo "$VAR" | sed -n '/^update.*config$/p'

echo
echo 'delete specified lines'
sed '2,4d' file.txt

echo
echo 'print starting from a certain line till the end of file'
sed -n '2,$p' file.txt

echo
echo 'print starting from a certain pattern till another pattern'
sed -n '/- README/,/- verify/p' file.txt

echo
echo 'search and replace'
sed 's/README/READYOU/g' file.txt

echo
echo 'insert a string at the begin of each line'
sed 's/^/-/' file.txt

echo
echo 'insert a string at the end of each line'
sed 's/$/./' file.txt

echo
echo 'reading sed commands for a file'
sed -n -f sed_command_file.txt file.txt

echo
echo 'regex: Make a list of files in /usr/bin that have the letter "a" as the second character.'
ls /usr/bin | sed -n /^.a/p

echo
echo '-e : Multiple queries'
ls -l /usr/bin | sed -n -e '/^l/p' -e '/p$/p'
sed -n -e '/ $/p' -e '/\t$/p' file.txt












