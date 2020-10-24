#ifndef	_CPP_STRATEGY_FLY_ROCKET_POWERED_HPP_
#define _CPP_STRATEGY_FLY_ROCKET_POWERED_HPP_

#include "MiniDuckSimulator.hpp"


class FlyRocketPowered : public FlyBehavior {

	public:	void fly () const {
		std::cout << "I'm flying with a rocket" << std::endl;
	}
};


#endif