#ifndef	_CPP_FACTORY_CHICAGO_CHEESE_PIZZA_HPP_
#define _CPP_FACTORY_CHICAGO_CHEESE_PIZZA_HPP_

#include "Pizzafm.hpp"

class ChicagoStyleCheesePizza : public Pizza {

	public: ChicagoStyleCheesePizza() {
		_name = "Chicago Style Deep Dish Cheese Pizza";
		_dough = "Extra Thick Crust Dough";
		_sauce = "Plum Tomato Sauce";
		_toppings.push_back( "Shredded Mozzarella Cheese" );
	}
	public: void cut() const {
		std::cout << "Cutting the pizza into square slices" << std::endl;
	}
};

#endif