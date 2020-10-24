#ifndef	_CPP_FACTORY_ABSTRACT_SAUCE_HPP_
#define _CPP_FACTORY_ABSTRACT_SAUCE_HPP_

#include "Pizzaaf.hpp"


class Sauce {

	public: virtual ~Sauce() = 0 {
	}
	public: virtual std::string toString() const = 0;
};


#endif