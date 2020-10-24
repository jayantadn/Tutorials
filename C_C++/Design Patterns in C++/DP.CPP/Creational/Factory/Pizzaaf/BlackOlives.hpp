#ifndef	_CPP_FACTORY_ABSTRACT_BLACKOLIVES_HPP_
#define _CPP_FACTORY_ABSTRACT_BLACKOLIVES_HPP_

#include "Pizzaaf.hpp"


class BlackOlives : public Veggies {

	public: std::string toString() const {
		return ( "Black Olives" );
	}
};


#endif