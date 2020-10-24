use threads;
use threads::shared;
use Thread::Queue;
use Tk;

## program 1
my $thr = threads->create( \&threadsub );

print "I am in main\n";
print "Thread returned: " . $thr->join();

# sub threadsub
{
	print "I am in thread\n";
	return 1;
}

## program 2
my $thr = threads->create( \&threadsub );
$thr->detach();

print "I am in main\n";

sleep(1);

sub threadsub
{
	print "I am in thread\n";
	return 1;
}

## program 3 - Data
my $var1 : shared = 0;
my $var2 = 0;

my $thr = threads->create( \&threadsub );
$thr->detach();

print "I am in main\n";
$var1++;
$var2++;
sleep(5);

sub threadsub
{
	print "I am in thread\n";
	sleep(1);
	print( "var1 = $var1; var2 = $var2\n" );
}

## program 4 - queue

my $queue = new Thread::Queue;

my $thr = threads->create( \&threadsub );
$thr->detach();

$queue->enqueue( 10 );

sleep( 1 );

sub threadsub
{
	print "I am in thread\n";
	print $queue->dequeue();
}