#ifndef	_CPP_DECORATOR_DARK_ROAST_HPP_
#define _CPP_DECORATOR_DARK_ROAST_HPP_

#include "Starbuzz.hpp"


class DarkRoast : public Beverage {

	public: DarkRoast() {
		_description = "Dark Roast Coffee";
	}
	public: double cost() const {
		return 0.99;
	}
};

#endif