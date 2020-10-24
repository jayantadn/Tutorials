#ifndef	_CPP_DECORATOR_SOY_HPP_
#define _CPP_DECORATOR_SOY_HPP_

#include "Starbuzz.hpp"


class Soy : public CondimentDecorator {

	private: const Beverage* _beverage;

 	public: explicit Soy( const Beverage* beverage ) :
		_beverage( beverage ) { assert( beverage );
	}
	public: ~Soy() {
		delete _beverage;
	}
	public: std::string getDescription() const {
		return _beverage->getDescription() + ", Soy";
	}
	public: double cost() const {
		return 0.15 + _beverage->cost();
	}
};


#endif