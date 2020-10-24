#include <stdio.h>
#include <string.h>

#include "GetArgv.hpp"

void GetArgv::func() {
    printf("GetArgv::func()\n");
}

void GetArgv::get(char** argv, int strsize, int& arrsize) {
    printf("GetArgv::get()\n");
    arrsize = 2;
    strcpy(argv[0], "arg0");
    strcpy(argv[1], "arg1");
}