package Cocoa;

require Exporter;
@ISA = qw(Exporter);
@EXPORT = qw( printName );

my $this;

sub new()
{
    shift;
    my %arg = @_;

    $this->{ Name } = $arg{Name};

    bless $this;

    print "This is the constructor\n";

    return $this;
}

sub printName()
{
    print "We are in printName\n";
    print "Parameter passed: $this->{Name}\n";
}

sub DESTROY
{
    print "This is the destructor\n";
}

1;