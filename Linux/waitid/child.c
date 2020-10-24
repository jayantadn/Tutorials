#include <stdio.h>
#include <unistd.h>

int main() {
    while(1)
    {
        printf("I am the child\n");
        usleep(1000000);
    }
    return 0;
}

