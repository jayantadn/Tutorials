#ifndef	_CPP_FACTORY_ABSTRACT_PLUMTOMATO_SAUCE_HPP_
#define _CPP_FACTORY_ABSTRACT_PLUMTOMATO_SAUCE_HPP_

#include "Pizzaaf.hpp"


class PlumTomatoSauce : public Sauce {

	public: std::string toString() const {
		return "Tomato sauce with plum tomatoes";
	}
};


#endif