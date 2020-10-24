## 01 ##

die "File could not be opened" if !(open (FILE, "file.txt"));

do
{
	$line = <FILE>;
	print $line if ($line);
} while( $line );
close FILE;

die "File could not be opened" if !(open (FILE, ">files.txt"));
print "Enter something: ";
$line = <STDIN>;
print FILE $line;
print FILE $line;
close FILE;

print STDERR "Program ends here. Go home.\n";

if (-e "file.txt")
{
	print "File exists";
}
else
{
	print "File does not exist";
}

do
{
	$line = <>;
	print $line if ($line);
} while ($line);

open (FILE, "file.txt");
@arr = <FILE>;
print @arr;

print "Program: ", $0, "\n";
print "Argument: ", $ARGV[0], "\n";

open (READWRITE, "+>file.txt");
open FILE, "file.txt";
do
{
	$line = <FILE>;
	print $line;
} until (eof);


# 02 ##

open (FILE, "+<file.txt");
seek FILE, 0, 2;
print FILE "\nEND";
seek FILE, 0, 0;
print FILE "BEGIN\n"

open FILE, "file.txt";
seek FILE, 0, 2;
$pos = tell (FILE);
print $pos; # prints the size of the file

open FILE, "file.txt";
read FILE, $str, 10; # read the first 10 characters
print $str;
print getc FILE;


## 03 ##
use Cwd;
#print getcwd(), "\n";
mkdir "dir";
chdir "dir";
#print getcwd(), "\n";
chdir "..";
#print getcwd(), "\n";
#rmdir "dir";

opendir DIR, ".";
$tel = telldir DIR;
seekdir DIR, $tel+11;
@filelist = readdir DIR;
rewinddir DIR;
@filelist = readdir DIR;
#print "@filelist";

open FILE, ">tmp.txt";
close FILE;
rename ('tmp.txt', 'temp.txt');
rename "temp.txt", "dir/temp.txt";
print unlink "dir/temp.txt";

@tim = localtime (time());
print "the time is $tim[2]:$tim[1]:$tim[0]\n";
print "the date is ", $tim[5]+1900, "-$tim[4]-$tim[3]";


## 04 ##
system "calc";
print "Program exited";
exec "calc";
print "Unreachable code";
print "Please wait...";
sleep 10;
print "done\n";







