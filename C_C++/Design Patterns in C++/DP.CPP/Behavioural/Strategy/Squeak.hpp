#ifndef	_CPP_STRATEGY_SQUEAK_HPP_
#define _CPP_STRATEGY_SQUEAK_HPP_

#include "MiniDuckSimulator.hpp"

class Squeak : public QuackBehavior {

	public:	void quack () const {
		std::cout << "Squeak" << std::endl;
	}
};

#endif