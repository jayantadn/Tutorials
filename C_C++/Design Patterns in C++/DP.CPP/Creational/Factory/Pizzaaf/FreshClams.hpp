#ifndef	_CPP_FACTORY_ABSTRACT_FRESH_CLAMS_HPP_
#define _CPP_FACTORY_ABSTRACT_FRESH_CLAMS_HPP_

#include "Pizzaaf.hpp"


class FreshClams : public Clams {

	public: std::string toString() const {
		return "Fresh Clams from Long Island Sound";
	}
};


#endif