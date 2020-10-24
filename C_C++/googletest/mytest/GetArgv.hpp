/*
 * GetArgv.hpp
 *
 *  Created on: 25-Jul-2018
 *      Author: jayan
 */

#ifndef GETARGV_HPP_
#define GETARGV_HPP_

#include "IGetArgv.hpp"

class GetArgv : public IGetArgv {
private:

public:
    GetArgv(){}
	virtual ~GetArgv(){};
    void func();
    void get(char** argv, int strsize, int& arrsize);
};

#endif /* IGETARGV_HPP_ */
