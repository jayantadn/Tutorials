#include <stdio.h>
#include <unistd.h>

int main() {
    int cnt = 0;
    while(1) {
        cnt++;
        sleep(1);
    }

    return 0;
}