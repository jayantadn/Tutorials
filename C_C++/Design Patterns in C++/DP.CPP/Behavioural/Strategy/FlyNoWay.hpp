#ifndef	_CPP_STRATEGY_FLY_NO_WAY_WINGS_HPP_
#define _CPP_STRATEGY_FLY_NO_WAY_WINGS_HPP_

#include "MiniDuckSimulator.hpp"


class FlyNoWay : public FlyBehavior {

	public: void fly () const {
		std::cout << "I can't fly" << std::endl;
	}
};


#endif