#ifndef	_CPP_STRATEGY_QUACK_HPP_
#define _CPP_STRATEGY_QUACK_HPP_

#include "MiniDuckSimulator.hpp"


class Quack : public QuackBehavior {

	public: void quack () const {
		std::cout << "Quack" << std::endl;
	}
};


#endif