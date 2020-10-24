#include <stdio.h>
#include <fcntl.h>
#include <semaphore.h>
#include <sys/stat.h>
#include <errno.h>
#include <string.h>

int main() {
    if( 0 != sem_unlink("/test") && errno != ENOENT)
        printf("parent: semaphore unlink failed. errno = %s\n", strerror(errno));

    sem_t* sem = sem_open("/test", O_RDONLY | O_CREAT | O_EXCL, 0666, 0);
    if(sem == SEM_FAILED)
        printf("parent: semaphore open failed. errno = %s\n", strerror(errno));

    if( 0 != sem_wait(sem) )
        printf("parent: semaphore wait failed. errno = %s\n", strerror(errno));

    printf("sem released\n");
    return 0;
}
