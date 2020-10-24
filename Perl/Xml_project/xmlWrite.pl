use Data::Dumper;
use XML::Simple;

my $xmlhash = XMLin( 'C:\Users\jyd1kor\AppData\Roaming\DebugAssist\.metadata\.plugins\org.eclipse.debug.core\.launches\Bosch Debug Launcher_0.launch', KeyAttr=>[] );

print Dumper( $xmlhash );

#print XMLout( $xmlhash );
