#ifndef	_CPP_DECORATOR_MOCHA_HPP_
#define _CPP_DECORATOR_MOCHA_HPP_

#include "Starbuzz.hpp"


class Mocha : public CondimentDecorator {

	private: const Beverage* _beverage;

 	public: explicit Mocha( Beverage* beverage ) :
		_beverage( beverage ) { assert( beverage );
	}
	public: ~Mocha() {
		delete _beverage;
	}
	public: std::string getDescription() const {
		return _beverage->getDescription() + ", Mocha";
	}
	public: double cost() const {
		return 0.20 + _beverage->cost();
	}
};


#endif