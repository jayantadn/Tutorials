## 01 ##
#index "Jayanta Debnath", "Deb";
#print "String not found" if (index ("Jayanta Debnath", "xx") < 0 );

#print length "Jayanta";

#print substr ("Jayanta", 3, 2);
$str = "Jayanta";
substr ($str, 3, 2) = "bb";
#print uc $str;

#print join ":", (14, 40);

$str = sprintf "This date is %02d-%02d-%04d", 9, 4, 2014;
print $str;

