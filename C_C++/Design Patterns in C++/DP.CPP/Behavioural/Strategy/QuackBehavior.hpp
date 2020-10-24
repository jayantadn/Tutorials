#ifndef	_CPP_STRATEGY_QUACK_BEHAVIOR_HPP_
#define _CPP_STRATEGY_QUACK_BEHAVIOR_HPP_

#include "MiniDuckSimulator.hpp"


class QuackBehavior {

	public: virtual ~QuackBehavior() = 0 {
	};
	public: virtual void quack() const = 0;
};


#endif