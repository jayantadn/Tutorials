#ifndef	_CPP_ADAPTER_WILD_TURKEY_HPP_
#define _CPP_ADAPTER_WILD_TURKEY_HPP_

#include "Ducks.hpp"


class WildTurkey : public Turkey {

 	public: void fly() const {
		std::cout << "I'm flying a short distance" << std::endl;
	}
	public: void gobble() const {
		std::cout << "Gobble gobble" << std::endl;
	}
};

#endif
