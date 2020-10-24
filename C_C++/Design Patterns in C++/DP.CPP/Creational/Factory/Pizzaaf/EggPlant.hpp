#ifndef	_CPP_FACTORY_ABSTRACT_EGGPLANT_HPP_
#define _CPP_FACTORY_ABSTRACT_EGGPLANT_HPP_

#include "Pizzaaf.hpp"


class Eggplant : public Veggies {

	public: std::string toString() const {
		return "Eggplant";
	}
};


#endif