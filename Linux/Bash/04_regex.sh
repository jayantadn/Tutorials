# print the occurrance of number
grep number 03_condition.sh
grep -n number 03_condition.sh		# print line number also
# -v inverse match
# -c count number of occurrances
# -i ignore case

echo
echo "printing lines starting with #"
grep ^# 03_condition.sh

echo
echo "printing lines ending with d"
grep d$ 03_condition.sh

echo
echo "printing lines containing numbers"
# grep -n [0123456789] 03_condition.sh
# grep -n [^0123456789] 03_condition.sh		# lines without numbers
grep -n [0-9] 03_condition.sh	# ranges of characters

echo
echo "single characters match"
grep "e..o" 03_condition.sh		 # to match the . character use -F option

echo
echo "multiple characters match"
grep "e*o" 03_condition.sh		 # to match the . character use -F option

