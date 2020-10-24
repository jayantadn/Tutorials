/*
 * thread3.hpp
 *
 *  Created on: 06-Jun-2018
 *      Author: jyd1kor
 */

#ifndef THREAD3_HPP_
#define THREAD3_HPP_

#include <stdio.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <mqueue.h>
#include <string.h>
#include <errno.h>

void mq_wait();

void* thread3(void* arg) {
    mqd_t mqdes = mq_open( "/TrialQueue", O_RDONLY  );

    char msg[256];

    while(1) {
        std::cout << "thread3: waiting for message" << std::endl << std::flush;

        mq_receive( mqdes, msg, sizeof(msg), NULL );
        std::cout << "thread3: message received - " << msg << std::endl << std::flush;

        // do something depending on the message
        if(strcmp(msg, "someip") == 0) {
            break;
        }
        else {
            // do something else
        }

    }

    mq_close( mqdes );
}

#endif /* THREAD3_HPP_ */
