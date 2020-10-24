#ifndef	_CPP_ADAPTER_MALLARD_DUCK_HPP_
#define _CPP_ADAPTER_MALLARD_DUCK_HPP_

#include "Ducks.hpp"


class MallardDuck : public Duck {

 	public: void fly() const {
		std::cout << "I'm flying" << std::endl;
	}
	public: void quack() const {
		std::cout << "Quack" << std::endl;
	}
};


#endif
