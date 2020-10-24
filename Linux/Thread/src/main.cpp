//============================================================================
// Name        : Thread.cpp
// Author      : Jayanta
// Version     :
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <iostream>
#include <pthread.h>
#include <unistd.h>
#include <semaphore.h>

#include "thread1.hpp"
#include "thread2.hpp"
#include "thread3.hpp"

/* WARNING! THE CODE HERE IS OVER SIMPLIFIED FOR EXAMPLE PURPOSE.
 * PLEASE DO NOT USE THIS CODE DIRECTLY FOR PRODUCTION SOFTWARE.
 */

int main() {
    pthread_attr_t attr;
    pthread_attr_init(&attr);

    // example 1 - simple thread
    // pthread_t th1;
    // pthread_create(&th1, &attr, thread1, NULL);
    // pthread_join(th1, NULL);

    // example 2 - data synchronization
   // pthread_t th_reader, th_writer;
   // sem_t data_available;
   // sem_init(&data_available, 0, 0);
   // pthread_create(&th_reader, &attr, reader, &data_available);
   // pthread_create(&th_writer, &attr, writer, &data_available);
   // void* ret;
   // pthread_join(th_reader, &ret);
   // pthread_join(th_writer, NULL);
   // std::cout << "main: reader thread has exited with the value: " << *((bool*)ret) << std::endl << std::flush;
   // std::cout << "main: writer thread has exited" << std::endl << std::flush;

    // example 3 - external events
   pthread_t th3;
   pthread_create(&th3, &attr, thread3, NULL);
   pthread_join(th3, NULL);

    return 0;
}
