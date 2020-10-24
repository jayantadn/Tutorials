#ifndef	_CPP_DECORATOR_WHIP_HPP_
#define _CPP_DECORATOR_WHIP_HPP_

#include "Starbuzz.hpp"


class Whip : public CondimentDecorator {

	private: const Beverage* _beverage;

 	public: explicit Whip( const Beverage* beverage ) :
		_beverage( beverage ) { assert( beverage );
	}
	public: ~Whip() {
		delete _beverage;
	}
	public: std::string getDescription() const {
		return _beverage->getDescription() + ", Whip";
	}
	public: double cost() const {
		return 0.10 + _beverage->cost();
	}
};


#endif