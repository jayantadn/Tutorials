#ifndef	_CPP_FACTORY_ABSTRACT_FROZEN_CLAMS_HPP_
#define _CPP_FACTORY_ABSTRACT_FROZEN_CLAMS_HPP_

#include "Pizzaaf.hpp"


class FrozenClams : public Clams {

	public: std::string toString() const {
		return "Frozen Clams from Chesapeake Bay";
	}
};

#endif