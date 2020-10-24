## Associative Array ##
my %assarr;
my $var = 10;
$assarr{ "Name" } = "Jayanta";
$assarr{ 0 } = "The 0-th element";
$assarr{ $var } = "The 10-th element";

my %assarr = (	0, 		"The 0-th element",
				$var, 	"The $var-th element",
				"Name", "Jayanta"
			 );

my %assarr = (	0 		=>	"The 0-th element",
				$var 	=>	"The $var-th element",
				"Name"	=>	"Jayanta"
			 );



my @arr = (		0, 		"The 0-th element",
				$var, 	"The $var-th element",
				"Name", "Jayanta"
			 );
my %assarr = @arr;

delete($assarr{"Name"});
foreach $key (keys(%assarr))
{
	print "\"$key\" \t: $assarr{$key}\n";
}

while(($key, $val) = each(%assarr))
{
	print "$key : $val\n";
}


print "Element found" if exists ( $assarr{ "Name" } );

# hash value as array
use Data::Dumper;

my @arr = ( 1, 2, 3 );
my @arr2 = ( 11, 22, 33 );
my %hash = (
    Class1 => @arr,
    Class2 => @arr2
);
print Dumper( \%hash );




