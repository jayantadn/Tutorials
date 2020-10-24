#include <stdio.h>
#include <fcntl.h>
#include <semaphore.h>
#include <sys/stat.h>
#include <errno.h>
#include <string.h>

int main() {
    sem_t* sem = sem_open("/test", O_WRONLY);
    if(sem == SEM_FAILED)
        printf("child: semaphore open failed. errno = %s\n", strerror(errno));

    if( 0 != sem_post(sem) )
        printf("parent: semaphore post failed. errno = %s\n", strerror(errno));

    return 0;
}
