#ifndef	_CPP_FACTORY_ABSTRACT_REGGINANO_CHEESE_HPP_
#define _CPP_FACTORY_ABSTRACT_REGGINANO_CHEESE_HPP_

#include "Pizzaaf.hpp"


class ReggianoCheese : public Cheese {

	public: std::string toString() const {
		return "Reggiano Cheese";
	}
};


#endif