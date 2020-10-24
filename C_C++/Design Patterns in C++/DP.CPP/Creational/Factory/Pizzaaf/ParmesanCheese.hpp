#ifndef	_CPP_FACTORY_ABSTRACT_PARMESAN_CHEESE_HPP_
#define _CPP_FACTORY_ABSTRACT_PARMESAN_CHEESE_HPP_

#include "Pizzaaf.hpp"


class ParmesanCheese : public Cheese {

	public: std::string toString() const {
		return "Shredded Parmesan";
	}
};


#endif