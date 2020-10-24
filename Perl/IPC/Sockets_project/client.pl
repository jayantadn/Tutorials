use strict;
use Socket;

my ($remote, $port, $iaddr, $paddr, $proto, $line);

$remote = "localhost";
$port = 4000;

#if ($port =~ /\D/) { $port = getservbyname($port, "tcp") }
#die "No port" unless $port;

$iaddr = inet_aton( $remote ) || die "No host: $remote";
$paddr = sockaddr_in( $port, $iaddr );

$proto = getprotobyname( "tcp" );
socket( SOCK, PF_INET, SOCK_STREAM, $proto ) || die "socket: $!";

print "connecting to server..\n";
connect( SOCK, $paddr ) or die "could not connect to server";
print "Connected\n";

# print "Waiting for data\n";
# sleep( 2 );

# while( $line = <SOCK> )
# {
	# print $line;
# }

sleep 1;

print SOCK "I am from client\n";

sleep 1;

print SOCK "I am from client\n";

close( SOCK );
