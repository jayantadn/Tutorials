#ifndef	_CPP_FACTORY_ABSTRACT_PIZZA_INGREDIENT_FACTORY_HPP_
#define _CPP_FACTORY_ABSTRACT_PIZZA_INGREDIENT_FACTORY_HPP_

#include "Pizzaaf.hpp"


class PizzaIngredientFactory {
	public: virtual Dough* createDough() const = 0;
	public: virtual Sauce* createSauce() const = 0;
	public: virtual Cheese* createCheese() const = 0;
	public: virtual std::vector< Veggies* > createVeggies() const = 0;
	public: virtual Pepperoni* createPepperoni() const = 0;
	public: virtual Clams* createClam() const = 0;
	public: virtual ~PizzaIngredientFactory() = 0 {
	}};


#endif