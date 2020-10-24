#ifndef	_CPP_FACTORY_CHICAGO_CLAM_PIZZA_HPP_
#define _CPP_FACTORY_CHICAGO_CLAM_PIZZA_HPP_

#include "Pizzafm.hpp"


class ChicagoStyleClamPizza : public Pizza {

	public: ChicagoStyleClamPizza() {
		_name = "Chicago Style Clam Pizza";
		_dough = "Extra Thick Crust Dough";
		_sauce = "Plum Tomato Sauce";
 		_toppings.push_back( "Shredded Mozzarella Cheese" );
		_toppings.push_back( "Frozen Clams from Chesapeake Bay" );
	}
	public: void cut() const {
		std::cout << "Cutting the pizza into square slices" << std::endl;
	}
};


#endif