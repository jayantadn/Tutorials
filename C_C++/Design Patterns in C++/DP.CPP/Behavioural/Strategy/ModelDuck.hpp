#ifndef	_CPP_STRATEGY_MODEL_DUCK_HPP_
#define _CPP_STRATEGY_MODEL_DUCK_HPP_

#include "MiniDuckSimulator.hpp"


class ModelDuck : public Duck {

	public:	ModelDuck() : Duck( new FlyNoWay(), new FakeQuack() ) {
	}
	public: void display() const {
		std::cout << "I'm a model duck" << std::endl;
	}
};


#endif