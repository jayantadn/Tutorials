#ifndef	_CPP_STRATEGY_MALLARD_DUCK_HPP_
#define _CPP_STRATEGY_MALLARD_DUCK_HPP_

#include "MiniDuckSimulator.hpp"

class MallardDuck : public Duck {

	public:	MallardDuck() : Duck( new FlyWithWings(), new Quack() ) {
	}
	public: void display() const {
		std::cout << "I'm a real Mallard duck" << std::endl;
	}
};


#endif