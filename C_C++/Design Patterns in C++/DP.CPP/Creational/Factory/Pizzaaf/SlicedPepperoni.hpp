#ifndef	_CPP_FACTORY_ABSTRACT_SLICED_PEPPERONI_HPP_
#define _CPP_FACTORY_ABSTRACT_SLICED_PEPPERONI_HPP_

#include "Pizzaaf.hpp"


class SlicedPepperoni : public Pepperoni {

	public: std::string toString() const {
		return "Sliced Pepperoni";
	}
};


#endif