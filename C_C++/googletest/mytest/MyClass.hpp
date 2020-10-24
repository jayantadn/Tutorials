/*
 * MyClass.hpp
 *
 *  Created on: 25-Jul-2018
 *      Author: jayan
 */

#ifndef MYCLASS_HPP_
#define MYCLASS_HPP_

#include <iostream>

#include "IGetArgv.hpp"

class MyClass {
private:
    int num;
    IGetArgv& igetargv;

public:
	MyClass(int, IGetArgv& i);
	virtual ~MyClass();
	int getNum() { return num; }
    friend std::ostream& operator<<( std::ostream& stream, const MyClass& c ) {
        stream << "[<<] MyClass value is: " << c.num;
        return stream;
    }
    // friend std::ostream& PrintTo( std::ostream& stream, const MyClass& c ) {
        // stream << "[PrintTo] MyClass value is: " << c.num;
        // return stream;
    // }
    
    void useargs();
};

#endif /* MYCLASS_HPP_ */
