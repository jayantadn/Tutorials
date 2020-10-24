/*
 * thread1.hpp
 *
 *  Created on: 06-Jun-2018
 *      Author: jyd1kor
 */

#ifndef THREAD1_HPP_
#define THREAD1_HPP_

void* thread1(void* arg) {
    /* WARNING! DO NOT USE THE FOLLOWING METHOD TO ACHIEVE CYCLIC RASTERS.
     * THIS IS ONLY FOR EXAMPLE PURPOSE.
     */
    while(1) {
        std::cout << "Thread1 is running." << std::endl << std::flush;
        usleep(1000000);
    }
}

#endif /* THREAD1_HPP_ */
