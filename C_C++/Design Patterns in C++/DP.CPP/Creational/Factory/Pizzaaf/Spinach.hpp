#ifndef	_CPP_FACTORY_ABSTRACT_SPINACH_HPP_
#define _CPP_FACTORY_ABSTRACT_SPINACH_HPP_

#include "Pizzaaf.hpp"


class Spinach : public Veggies {

	public: std::string toString() const {
		return ( "Spinach" );
	}
};


#endif