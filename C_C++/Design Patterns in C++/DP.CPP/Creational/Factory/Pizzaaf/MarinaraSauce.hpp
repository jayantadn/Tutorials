#ifndef	_CPP_FACTORY_ABSTRACT_MARINARA_SAUCE_HPP_
#define _CPP_FACTORY_ABSTRACT_MARINARA_SAUCE_HPP_

#include "Pizzaaf.hpp"


class MarinaraSauce : public Sauce {

	public: std::string toString() const {
		return "Marinara Sauce";
	}
};


#endif