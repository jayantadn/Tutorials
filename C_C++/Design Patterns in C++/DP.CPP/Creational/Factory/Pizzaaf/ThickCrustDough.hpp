#ifndef	_CPP_FACTORY_ABSTRACT_THICK_CRUST_DOUGH_HPP_
#define _CPP_FACTORY_ABSTRACT_THICK_CRUST_DOUGH_HPP_

#include "Pizzaaf.hpp"


class ThickCrustDough : public Dough {

	public: std::string toString() const {
		return "Thick Crust Dough";
	}
};


#endif