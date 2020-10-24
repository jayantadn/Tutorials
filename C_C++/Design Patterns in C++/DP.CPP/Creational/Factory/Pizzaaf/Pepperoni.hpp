#ifndef	_CPP_FACTORY_ABSTRACT_PEPPERONI_HPP_
#define _CPP_FACTORY_ABSTRACT_PEPPERONI_HPP_

#include "Pizzaaf.hpp"


class Pepperoni {

	public: virtual ~Pepperoni() = 0 {
	}
	public: virtual std::string toString() const = 0;
};


#endif