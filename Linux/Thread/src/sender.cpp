#include <stdio.h>
#include <fcntl.h> 
#include <sys/stat.h> 
#include <mqueue.h>
#include <string.h>
#include <errno.h>

int main()
{
  const char* msg = "someip";
  struct mq_attr attr;

  printf( "--- Sender start --- \n" );

  attr.mq_flags = 0;
  attr.mq_maxmsg = 10;
  attr.mq_msgsize = 255;
  attr.mq_curmsgs = attr.mq_maxmsg;
  mqd_t mqdes = mq_open( "/TrialQueue", 
                          O_WRONLY | O_CREAT,
                          S_IWUSR | S_IRUSR,
                          &attr
                       );
  
  if( mqdes != -1 ) 
    printf( "mqueue opened successfully\n" );
  else
    printf( "error opening mqueue: %s\n", strerror( errno ) );
  
  printf( "mqdes = %d \n", mqdes );
  
  if( mq_send( mqdes, msg, strlen(msg) + 1, 0 ) == 0 ) 
    printf( "message sent successfully\n" );
  else
    printf( "error sending message: %s\n", strerror( errno ) );
  
  mq_close( mqdes );
  
  printf( "--- Sender end --- \n" );
  return 0;
}
