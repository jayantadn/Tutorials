/*
 * MyMocks.hpp
 *
 *  Created on: 25-Jul-2018
 *      Author: jayan
 */

#ifndef MyMocks_HPP_
#define MyMocks_HPP_

#include "gmock/gmock.h"

#include "IGetArgv.hpp"

class Mock_IGetArgv : public IGetArgv {
 public:
  MOCK_METHOD0(func, void());
  MOCK_METHOD3(get, void(char** argv, int strsize, int& arrsize));
};

#endif 
