#ifndef	_CPP_STRATEGY_RUBBER_DUCK_HPP_
#define _CPP_STRATEGY_RUBBER_DUCK_HPP_

#include "MiniDuckSimulator.hpp"


class RubberDuck : public Duck {

	public:	RubberDuck() : Duck( new FlyNoWay(), new Squeak() ) {
	}
	public: void display() const {
		std::cout << "I'm a rubber duck" << std::endl;
	}
};


#endif