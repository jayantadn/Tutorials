echo
echo "Printing specific columns"
ls -l | awk '{ print $5, $9 }'
ls -l | awk '{ print "size of", $9, "is \t", $5, "bytes" }'

echo
echo "regex"
ls /etc | awk '/^(a|x).*.conf$/ { print $0 }'
df -h | awk '/drive/ { print $0 }'

echo
echo "print comments before\after output"
ls /etc | awk 'BEGIN { print "--- begin of output ---" } /\.conf$/ { print $0 }'
ls /etc | awk '/\.conf$/ { print $0 } END { print "--- end of output ---" } '

echo
echo "command file"
ls /etc | awk -f cmd.awk

echo
echo "field separator"
 awk 'BEGIN { FS="," } { print $1 }' nutmix.csv

echo
echo "output field separator"
ls -l | sed '/total/d' | awk 'BEGIN { OFS=","; ORS=";" } { print $5, $9; print $1}'

echo
echo "number of records"
ls | sed '/total/d' | awk ' { print $0 } END { print "number of records: " NR }'

echo
echo "variables"
ls -l | sed '/total/d' | awk '{ sum+=$5; print $0} END { print "sum is: " sum}'

echo
echo "printf"
ls -l | sed '/total/d' | awk '{ printf "filename is: %s \n", $9 }'

echo "You can use Awk's split() function to do additional splitting."
# awk -F : '{ split($3, a, ","); print a[1], a[2], a[3] }' file

echo "Awk If Else If Example"
awk -F, '
{
	split( $7, folder, "/" );
	if (folder[1] =="Videobox") print folder[2];
}
' $MOVIE_DIR/database.csv

echo "Awk for loop"
echo $firstline | awk -v awk_field=$field -F, '{ for(i=1; i<=NF; i++) if( $i == awk_field ) print i }'

echo
echo "top 2 largest file/folder"
du -s /home/jyd1kor/Tools/* | awk '
    BEGIN {
        print "List of all files: "
    }
    
    {
        if ($1 > var1) 
        {
            var2=var1;
            var2s=var1s;

            var1=$1;
            var1s=$2;
        }
        
        print $0
    }
    
    END {
        printf "largest file is %s (%d bytes) \n", var1s, var1;
        printf "runner up is %s (%d bytes) \n", var2s, var2;
    }
'

echo
echo "html output"
awk '
BEGIN {
	FS=",";
	printf "<html><body>\n";
	printf "<h1>NUT MIX</h1>\n";
	printf "<table border=1>\n";
}

{
	printf "<tr>\n";
	

	if( $1 == "Food" )
	{
	    printf "<tr>\n";
	    printf "<th>%s</th><th>%s</th><th>%s</th><th>%s</th>\n", $1, $2, $3, $4;
	    printf "</tr>\n";
	}
	else
	{
	    printf "<tr>\n";
	    printf "<td>%s</td><td>%s</td><td>%s</td><td>%s</td>\n", $1, $2, $3, $4;
	    printf "</tr>\n";
    }
	
	printf "</tr>\n";
}

END {
	printf "</table>\n";
	printf "</body></html>\n";
}
' nutmix.csv > awk.html























