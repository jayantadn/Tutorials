/*
 * thread2.hpp
 *
 *  Created on: 06-Jun-2018
 *      Author: jyd1kor
 */

#ifndef THREAD2_HPP_
#define THREAD2_HPP_

int globaldata = 0;
bool threadret = false;
bool waitagain = false;

void* reader(void* data_available) {
    while(1) {
        std::cout << "reader thread is waiting for global data." << std::endl << std::flush;

        sem_wait((sem_t*)data_available);
        std::cout << "reader thread has received global data." << std::endl << std::flush;
        std::cout << "reader: global data = " << globaldata << std::endl << std::flush;

        // evaluating global data
        if(globaldata == 100) {
            threadret = true;
            std::cout << "reader: SUCCESS!" << std::endl << std::flush;
        }
        else {
            threadret = false;
            std::cout << "reader: ERROR!" << std::endl << std::flush;
        }

        // exit or wait again for new data
        if(waitagain) {
            continue;
        }
        else {
            pthread_exit(&threadret);
        }
    }

    return NULL;
}

void* writer(void* data_available) {
    std::cout << "writer thread is computing global data." << std::endl << std::flush;

    // some complex logic to derive the value of globaldata
    for(globaldata=0; globaldata<100; globaldata++) {
        usleep(50000);
    }

    std::cout << "writer thread has finished computing global data." << std::endl << std::flush;
    sem_post((sem_t*)data_available);

    return NULL;
}

#endif /* THREAD2_HPP_ */
