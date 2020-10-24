#ifndef	_CPP_TEMPLATE_BARISTA_CAFFEINE_BEVERAGE_HPP_
#define _CPP_TEMPLATE_BARISTA_CAFFEINE_BEVERAGE_HPP_

#include "Barista.hpp"


class CaffeineBeverage {

	public: virtual ~CaffeineBeverage()  {
	}
	public: virtual void prepareRecipe() {
		boilWater();
		brew();
		pourInCup();
		addCondiments();
	}
 	protected: virtual void brew() const = 0;
 	protected: virtual void addCondiments() const = 0;
 	private: void boilWater() const {
		std::cout << "Boiling water" << std::endl;
	}
 	private: void pourInCup() const {
		std::cout << "Pouring into cup" << std::endl;
	}
};


#endif