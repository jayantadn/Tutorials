#include <stdio.h>
#include <fcntl.h> 
#include <sys/stat.h> 
#include <mqueue.h>
#include <string.h>
#include <errno.h>

int main()
{
  char msg[256]; // should be greater than attr.mq_msgsize

  printf( "--- Receiver start --- \n" );
  mqd_t mqdes = mq_open( "/TrialQueue", 
                          O_RDONLY
                       );
  
  if( mqdes > 0 ) 
    printf( "mqueue opened successfully\n" );
  else
    printf( "error opening mqueue: %s\n", strerror( errno ) );
  
  printf( "mqdes = %d \n", mqdes );

  if( mq_receive( mqdes, msg, sizeof(msg), NULL ) != -1 ) 
    printf( "message received: %s\n", msg );
  else
    printf( "error receiving message: %s\n", strerror( errno ) );
  
  mq_close( mqdes );
  
  printf( "--- Receiver end --- \n" );
  return 0;
}
