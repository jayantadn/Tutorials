#include <stdio.h>
#include <sched.h>
#include <spawn.h>
#include <unistd.h>

int main() {
/*  pid_t childpid;
    char* arg[] = { "./testapp", NULL };
    char* env[] = { NULL };
    posix_spawnattr_t att;
    struct sched_param param = { .sched_priority = sched_get_priority_min(SCHED_RR) };
    if( 0 != posix_spawnattr_init(&att) ) printf( "posix_spawnattr_init() failed\n" );
    if( 0 != posix_spawnattr_setschedparam( &att, &param ) ) printf( "posix_spawnattr_setschedparam() failed\n" );
    if( 0 != posix_spawnattr_setschedpolicy( &att, SCHED_FIFO ) ) printf( "posix_spawnattr_setschedpolicy() failed\n" );
    if( 0 != posix_spawn(&childpid, "./testapp", NULL, &att, arg, env) ) printf( "posix_spawn() failed\n" );
*/

    struct sched_param param = { .sched_priority = 10 };
    pid_t pid = fork();
    switch(pid) {
    case -1:
        printf("fork() failed\n");
    
    case 0:
        if(0 != sched_setscheduler(0, SCHED_FIFO, &param)) printf("sched_setscheduler() failed\n");
        execl( "./testapp", "./testapp", NULL ); 
        printf("exec() failed\n");
    
    default:
        break;
    }

    return 0;
}

