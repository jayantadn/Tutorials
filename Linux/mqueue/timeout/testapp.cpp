#include <stdio.h>
#include <fcntl.h> 
#include <sys/stat.h> 
#include <mqueue.h>
#include <string.h>
#include <errno.h>

int main()
{
  const char* msg = "Some message from Sender";

  printf( "--- Sender start --- \n" );

  mqd_t mqdes = mq_open( "/TrialQueue", 
                          O_WRONLY | O_NONBLOCK
                       );
  
  if( mqdes != -1 ) 
    printf( "sender: mqueue opened successfully\n" );
  else
    printf( "sender: error opening mqueue: %s\n", strerror( errno ) );
  
  printf( "mqdes = %d \n", mqdes );
  
  if( mq_send( mqdes, msg, strlen(msg) + 1, 0 ) == 0 ) 
    printf( "message sent successfully\n" );
  else
    printf( "error sending message: %s\n", strerror( errno ) );
  
  mq_close( mqdes );
  
  printf( "--- Sender end --- \n" );
  return 0;
}