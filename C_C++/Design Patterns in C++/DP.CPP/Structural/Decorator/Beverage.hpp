#ifndef	_CPP_DECORATOR_BEVERAGE_HPP_
#define _CPP_DECORATOR_BEVERAGE_HPP_

#include "Starbuzz.hpp"


class Beverage {

 	protected: std::string _description;

	protected: Beverage() : 
		_description( "Unknown Beverage" ) {
	}
	public: virtual ~Beverage() = 0 {
	}
	public: virtual std::string getDescription() const {
		return _description;
	}
	public: virtual double cost() const = 0;
};



#endif