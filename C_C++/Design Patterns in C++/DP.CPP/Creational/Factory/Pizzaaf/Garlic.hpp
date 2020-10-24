#ifndef	_CPP_FACTORY_ABSTRACT_GARLIC_HPP_
#define _CPP_FACTORY_ABSTRACT_GARLIC_HPP_

#include "Pizzaaf.hpp"


class Garlic : public Veggies {

	public: std::string toString() const {
		return ( "Garlic" );
	}
};


#endif