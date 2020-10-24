#ifndef	_CPP_FACTORY_ABSTRACT_MUSHROOM_HPP_
#define _CPP_FACTORY_ABSTRACT_MUSHROOM_HPP_

#include "Pizzaaf.hpp"


class Mushroom : public Veggies {

	public: std::string toString() const {
		return ( "Mushrooms" );
	}
};


#endif