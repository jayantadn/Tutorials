#include <stdio.h>
#include <fcntl.h> 
#include <sys/stat.h> 
#include <mqueue.h>
#include <string.h>
#include <errno.h>
#include <unistd.h>

#include "InstanceLauncher.hpp"

int main()
{
  char msg[256]; // should be greater than attr.mq_msgsize

  printf( "--- Receiver start --- \n" );

  struct mq_attr attr;
  attr.mq_flags = 0;
  attr.mq_maxmsg = 10;
  attr.mq_msgsize = 255;
  attr.mq_curmsgs = attr.mq_maxmsg;

  mqd_t mqdes = mq_open( "/TrialQueue", 
                          O_RDONLY | O_CREAT | O_NONBLOCK,
                          0666,
                          &attr
                       );
  
  if( mqdes > 0 ) 
    printf( "receiver: mqueue opened successfully\n" );
  else
    printf( "receiver: error opening mqueue: %s\n", strerror( errno ) );
  
  printf( "mqdes = %d \n", mqdes );

  exm::InstanceLauncher instLauncher;
  instLauncher.start( "testapp" );

  int i=0;
  for(; i<5; i++)
  {
      if( mq_receive( mqdes, msg, sizeof(msg), NULL ) != -1 )
      {
          printf( "message received: %s\n", msg );
          break;
      }
      else
        printf( "%d) error receiving message: %s\n", i, strerror( errno ) );

      usleep(5000000);
  }
  if( i== 5 )
      printf( "timeout" );
  else
      printf( "message was received properly. \n" );
  
  mq_close( mqdes );
  
  printf( "--- Receiver end --- \n" );
  return 0;
}
