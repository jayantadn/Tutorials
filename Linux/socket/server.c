#include <sys/types.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <stdio.h>
#include <unistd.h>
#include <string.h>

#define SIZE 100
#define PATH "/tmp/mysocket"

int main() {
    int sock, fd, ret;
    struct sockaddr_un server;
    char buf[SIZE];
    
    sock = socket( AF_UNIX, SOCK_STREAM, 0 );
    if( sock < 0 ) {
        perror( "socket call failed" );
        return(1);
    }
    
    server.sun_family = AF_UNIX;
    strcpy( server.sun_path, PATH );
    if( bind( sock, (struct sockaddr*) &server, sizeof( struct sockaddr_un ) ) ) {
        perror( "bind call failed" );
        return(1);
    }
    
    listen( sock, 5 );
    // while(1) 
    {
        printf( "waiting for data\n" );
        fd = accept( sock, 0, 0 );
        
        if( fd == -1 ) {
            perror( "accept failed" );
        }
        else {
            if( read( fd, buf, SIZE ) < 0 ) {
                perror( "read failed" );
            }
            else {
                printf( "data received: %s\n", buf );
            }
        }
        
        close(fd);
    }
    
    unlink( PATH );
}
