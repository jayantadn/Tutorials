#ifndef	_CPP_FACTORY_ABSTRACT_CHICAGO_INGREDIENT_FACTORY_HPP_
#define _CPP_FACTORY_ABSTRACT_CHICAGO_INGREDIENT_FACTORY_HPP_

#include "Pizzaaf.hpp"


class ChicagoPizzaIngredientFactory : public PizzaIngredientFactory {

	public: Dough* createDough() const {
		return new ThickCrustDough();
	}
 	public: Sauce* createSauce() const {
		return new PlumTomatoSauce();
	}
 	public: Cheese* createCheese() const {
		return new MozzarellaCheese();
	}
 	public: std::vector< Veggies* > createVeggies() const {
		std::vector< Veggies* > value;
		value.push_back( new BlackOlives() );
		value.push_back( new Spinach() );
		value.push_back( new Eggplant() );
		return value;
	}
 	public: Pepperoni* createPepperoni() const {
		return new SlicedPepperoni();
	}
	public: Clams* createClam() const {
		return new FrozenClams();
	}
};


#endif