#include <stdio.h>
#include <sched.h>

int main() {
    struct sched_param param;
    if( 0 != sched_getparam(0, &param) ) printf( "sched_getparam() failed\n" );
    printf( "priority = %d\n", param.sched_priority );
    printf( "policy = %d\n", sched_getscheduler(0) );

    return 0;
}

