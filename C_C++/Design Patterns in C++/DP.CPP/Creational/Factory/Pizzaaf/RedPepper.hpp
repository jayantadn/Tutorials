#ifndef	_CPP_FACTORY_ABSTRACT_REDPEPPER_HPP_
#define _CPP_FACTORY_ABSTRACT_REDPEPPER_HPP_

#include "Pizzaaf.hpp"


class RedPepper : public Veggies {

	public: std::string toString() const {
		return ( "Red Pepper" );
	}
};


#endif