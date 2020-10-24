#ifndef	_CPP_FACTORY_ABSTRACT_PIZZA_STORE_HPP_
#define _CPP_FACTORY_ABSTRACT_PIZZA_STORE_HPP_

#include "Pizzaaf.hpp"


class PizzaStore {

	protected: PizzaStore() {
	}
	public: virtual ~PizzaStore() = 0 {
	}
	public: std::auto_ptr< Pizza > orderPizza( std::string type ) const {
		std::auto_ptr< Pizza > pizza( createPizza( type ) );
		std::cout << "--- Making a " << pizza->getName() << " ---" << std::endl;
		pizza->prepare();
		pizza->bake();
		pizza->cut();
		pizza->box();
		return pizza;
	}
	public: virtual std::auto_ptr< Pizza > createPizza( std::string type ) const = 0;
};


#endif