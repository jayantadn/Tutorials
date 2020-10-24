#ifndef	_CPP_STRATEGY_DECOY_DUCK_HPP_
#define _CPP_STRATEGY_DECOY_DUCK_HPP_

#include "MiniDuckSimulator.hpp"


class DecoyDuck : public Duck {

	public:	DecoyDuck() : Duck( new FlyNoWay(), new MuteQuack() ) {
	}
	public: void display() const {
		std::cout << "I'm a duck Decoy" << std::endl;
	}
};


#endif