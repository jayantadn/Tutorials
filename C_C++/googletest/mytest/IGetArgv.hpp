/*
 * IGetArgv.hpp
 *
 *  Created on: 25-Jul-2018
 *      Author: jayan
 */

#ifndef IGETARGV_HPP_
#define IGETARGV_HPP_

class IGetArgv {
private:

public:
	virtual ~IGetArgv() {}
    virtual void func() = 0;
    virtual void get(char** argv, int strsize, int& arrsize) = 0;
};

#endif /* IGETARGV_HPP_ */
