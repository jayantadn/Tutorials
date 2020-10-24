#ifndef	_CPP_DECORATOR_DECAF_HPP_
#define _CPP_DECORATOR_DECAF_HPP_

#include "Starbuzz.hpp"

class Decaf : public Beverage {

  	public: Decaf() {
		_description = "Decaf Coffee";
	}
  	public: double cost() const {
		return 1.05;
	}
};

#endif