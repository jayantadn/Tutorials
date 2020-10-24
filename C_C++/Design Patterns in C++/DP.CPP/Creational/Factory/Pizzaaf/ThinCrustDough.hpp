#ifndef	_CPP_FACTORY_ABSTRACT_THIN_CRUST_DOUGH_HPP_
#define _CPP_FACTORY_ABSTRACT_THIN_CRUST_DOUGH_HPP_

#include "Pizzaaf.hpp"


class ThinCrustDough : public Dough {
	public: std::string toString() const {
		return "Thin Crust Dough";
	}
};


#endif