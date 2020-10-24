use strict;
use Socket;
use Tk;

my $port = 4000;
my $proto = getprotobyname( "tcp" );

socket( SOCK_SERVER, PF_INET, SOCK_STREAM, $proto );
setsockopt( SOCK_SERVER, SOL_SOCKET, SO_REUSEADDR, pack( "l", 1 ) );
bind( SOCK_SERVER, sockaddr_in( $port, INADDR_ANY ) );
listen( SOCK_SERVER, SOMAXCONN );

print "Server started. waiting for connection\n";

while( 1 )
{
  last if accept( SOCK_CLIENT, SOCK_SERVER );
}

print "Connected\n";

# print SOCK_CLIENT "Hi there\n";

my $mw = new Tk::MainWindow;
$mw->repeat( 5000, \&raster );
MainLoop();

sub raster()
{
	my $line = <SOCK_CLIENT>;
	print $line;
}
