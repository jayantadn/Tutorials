#ifndef	_CPP_FACTORY_ABSTRACT_DOUGH_HPP_
#define _CPP_FACTORY_ABSTRACT_DOUGH_HPP_

#include "Pizzaaf.hpp"


class Dough {

	public: virtual ~Dough() = 0 {
	}
	public: virtual std::string toString() const = 0;
};


#endif