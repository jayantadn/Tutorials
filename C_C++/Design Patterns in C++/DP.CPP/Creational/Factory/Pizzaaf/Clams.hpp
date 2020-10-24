#ifndef	_CPP_FACTORY_ABSTRACT_CLAMS_HPP_
#define _CPP_FACTORY_ABSTRACT_CLAMS_HPP_

#include "Pizzaaf.hpp"


class Clams {

	public: virtual ~Clams() = 0 {
	}
	public: virtual std::string toString() const = 0;
};


#endif