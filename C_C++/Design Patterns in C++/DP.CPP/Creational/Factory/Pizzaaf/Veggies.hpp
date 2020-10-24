#ifndef	_CPP_FACTORY_ABSTRACT_VEGGIES_HPP_
#define _CPP_FACTORY_ABSTRACT_VEGGIES_HPP_

#include "Pizzaaf.hpp"


class Veggies {

	public: virtual ~Veggies() = 0 {
	}
	public: virtual std::string toString() const = 0;
};


#endif