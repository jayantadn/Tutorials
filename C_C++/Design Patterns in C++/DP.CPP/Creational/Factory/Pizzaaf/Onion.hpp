#ifndef	_CPP_FACTORY_ABSTRACT_ONION_HPP_
#define _CPP_FACTORY_ABSTRACT_ONION_HPP_

#include "Pizzaaf.hpp"


class Onion : public Veggies {

	public: std::string toString() const {
		return ( "Onion" );
	}
};


#endif