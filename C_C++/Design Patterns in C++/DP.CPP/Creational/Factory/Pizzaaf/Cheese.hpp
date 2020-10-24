#ifndef	_CPP_FACTORY_ABSTRACT_CHEESE_HPP_
#define _CPP_FACTORY_ABSTRACT_CHEESE_HPP_

#include "Pizzaaf.hpp"


class Cheese {

	public: virtual ~Cheese() = 0 {
	}
	public: virtual std::string toString() const = 0;
};


#endif