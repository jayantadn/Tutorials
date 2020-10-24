#ifndef	_CPP_FACTORY_ABSTRACT_MOZZARELLA_CHEESE_HPP_
#define _CPP_FACTORY_ABSTRACT_MOZZARELLA_CHEESE_HPP_

#include "Pizzaaf.hpp"


class MozzarellaCheese : public Cheese {

	public: std::string toString() const {
		return "Shredded Mozzarella";
	}
};


#endif