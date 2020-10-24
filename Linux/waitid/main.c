#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

void exec() {
    pid_t pid = fork();
    switch(pid) {
    case -1:    /* Error */
        break;

    case 0:     /* child process */
        execl( "./child", "child", NULL );
        break;
    
    default:    /* parent process */
        break;
    }
}

int main() {
    siginfo_t info;
    
    exec();
    exec();    

    usleep(20000000);
    printf("wait started\n");
    for(int i=0; i<2; i++) {
        waitid( P_ALL, 0, &info, WEXITED );
        printf( "signo=%d, code=%d, pid=%d, uid=%d, status=%d, value=%d\n", 
                info.si_signo, info.si_code, info.si_pid, info.si_uid, info.si_status, info.si_value.sival_int );
    //        if( info.si_status == SIGFPE ) printf( "hit\n");
    }
    
    return 0;
}
