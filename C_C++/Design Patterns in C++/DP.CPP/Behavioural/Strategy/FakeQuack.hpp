#ifndef	_CPP_STRATEGY_FAKE_QUACK_HPP_
#define _CPP_STRATEGY_FAKE_QUACK_HPP_

#include "MiniDuckSimulator.hpp"


class FakeQuack : public QuackBehavior {

	public:	void quack () const {
		std::cout << "Qwak" << std::endl;
	}
};


#endif