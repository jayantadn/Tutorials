#ifndef	_CPP_STRATEGY_MUTE_QUACK_HPP_
#define _CPP_STRATEGY_MUTE_QUACK_HPP_

#include "MiniDuckSimulator.hpp"


class MuteQuack : public QuackBehavior {

	public:	void quack () const {
		std::cout << "<< Silence >>" << std::endl;
	}
};


#endif