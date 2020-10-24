//============================================================================
// Name        : Process.cpp
// Author      : Jayanta
// Version     :
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <iostream>
#include <sys/types.h>
#include <unistd.h>

/* WARNING! THE CODE HERE IS OVER SIMPLIFIED FOR EXAMPLE PURPOSE.
 * PLEASE DO NOT USE THIS CODE DIRECTLY FOR PRODUCTION SOFTWARE.
 */

void child_process() {
    while(1) {
        std::cout << "Child process running with pid: " << getpid() << std::endl << std::flush;
        usleep(5000000);
    }
}

void parent_process() {
    while(1) {
        std::cout << "Parent process running with pid: " << getpid() << std::endl << std::flush;
        usleep(10000000);
    }
}

int main() {
    std::cout << "Parent process started with pid: " << getpid() << std::endl << std::flush;

    pid_t ret = fork();

    switch( ret ) {
    case -1:    /* Error */
        std::cout << "Could not fork" << std::endl << std::flush;
        return -1;

    case 0:
        child_process();
        return 0;

    default:
        parent_process();
        return 0;
    }
}
