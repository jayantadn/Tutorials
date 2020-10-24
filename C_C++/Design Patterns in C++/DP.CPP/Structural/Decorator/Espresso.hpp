#ifndef	_CPP_DECORATOR_ESPRESSO_HPP_
#define _CPP_DECORATOR_ESPRESSO_HPP_

#include "Starbuzz.hpp"


class Espresso : public Beverage {

	public: Espresso() {
		_description = "Espresso";
	}
	public: double cost() const {
		return 1.99;
	}
};


#endif