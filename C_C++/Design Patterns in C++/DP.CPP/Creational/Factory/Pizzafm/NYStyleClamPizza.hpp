#ifndef	_CPP_FACTORY_NY_CLAM_PIZZA_HPP_
#define _CPP_FACTORY_NY_CLAM_PIZZA_HPP_

#include "Pizzafm.hpp"


class NYStyleClamPizza : public Pizza {

	public: NYStyleClamPizza() {
		_name = "NY Style Clam Pizza";
		_dough = "Thin Crust Dough";
		_sauce = "Marinara Sauce";
		_toppings.push_back( "Grated Reggiano Cheese" );
		_toppings.push_back( "Fresh Clams from Long Island Sound" );
	}
};
#endif