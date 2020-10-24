#ifndef	_CPP_FACTORY_ABSTRACT_CHEESE_PIZZA_HPP_
#define _CPP_FACTORY_ABSTRACT_CHEESE_PIZZA_HPP_

#include "Pizzaaf.hpp"


class CheesePizza : public Pizza {

	private: mutable std::auto_ptr< PizzaIngredientFactory > _ingredientFactory;

	public: explicit CheesePizza( PizzaIngredientFactory* ingredientFactory ) :
		_ingredientFactory( ingredientFactory ) { assert( ingredientFactory );
	}
 	public: void prepare() const {
		std::cout << "Preparing " << getName().c_str() << std::endl;
		_dough = std::auto_ptr< Dough>( _ingredientFactory->createDough() );
		_sauce = std::auto_ptr< Sauce>( _ingredientFactory->createSauce() );
		_cheese = std::auto_ptr< Cheese>( _ingredientFactory->createCheese() );
	}
};


#endif