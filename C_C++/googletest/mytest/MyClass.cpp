/*
 * MyClass.cpp
 *
 *  Created on: 25-Jul-2018
 *      Author: jayan
 */

#include <stdio.h>
 
#include "MyClass.hpp"

MyClass::MyClass(int n, IGetArgv& i) : num(n), igetargv(i) {
	// TODO Auto-generated constructor stub

}

MyClass::~MyClass() {
	// TODO Auto-generated destructor stub
}

void MyClass::useargs() {
    igetargv.func();
    
    int STRSIZE = 100;
    int ARRSIZE = 10;
    
    char arr[ARRSIZE][STRSIZE];
    char* argv[ARRSIZE];
    for(int i=0; i<ARRSIZE; i++)
        argv[i] = &(arr[i][0]);
    
    int arrsize;
    igetargv.get(argv, STRSIZE, arrsize);
    printf("MyClass::useargs(): arrsize = %d\n", arrsize);
    printf("MyClass::useargs(): argv[0] = %s \t argv[1] = %s \n", argv[0], argv[1]);
}
