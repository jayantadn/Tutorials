#include <sys/types.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <stdio.h>
#include <string.h>
#include <unistd.h>

#define SIZE 100
#define PATH "/tmp/mysocket"

int main() {
    int sock;
    struct sockaddr_un client;
    char buf[SIZE];
    
    sock = socket( AF_UNIX, SOCK_STREAM, 0 );
    if( sock < 0 ) {
        perror( "socket failed" );
        return 1;
    }
    
    client.sun_family = AF_UNIX;
    strcpy( client.sun_path, PATH );
    
    if( connect( sock, (struct sockaddr*) &client, sizeof(struct sockaddr_un) ) < 0 ) {
        perror( "connect failed" );
        return 1;
    }
    
    if( write( sock, "Some data", SIZE ) < 0 ) {
        perror( "write failed" );
        return 1;
    }
    
    return 0;
}
