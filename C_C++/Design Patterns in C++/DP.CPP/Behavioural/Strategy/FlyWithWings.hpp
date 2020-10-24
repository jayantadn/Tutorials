#ifndef	_CPP_STRATEGY_FLY_WITH_WINGS_HPP_
#define _CPP_STRATEGY_FLY_WITH_WINGS_HPP_

#include "MiniDuckSimulator.hpp"


class FlyWithWings : public FlyBehavior {

	public:	void fly () const {
		std::cout << "I'm flying!!" << std::endl;
	}
};


#endif