#ifndef	_CPP_TEMPLATE_BARISTA_CAFFEINE_BEVERAGE_WITH_HOOK_HPP_
#define _CPP_TEMPLATE_BARISTA_CAFFEINE_BEVERAGE_WITH_HOOK_HPP_

#include "Barista.hpp"


class CaffeineBeverageWithHook {

 	public: virtual ~CaffeineBeverageWithHook() = 0 {
	}
	public: virtual void prepareRecipe() {
		boilWater();
		brew();
		pourInCup();
		if( customerWantsCondiments() ) {
			addCondiments();
		}
	}
	public: virtual void brew() const = 0;
	public: virtual void addCondiments() const = 0;
	protected: virtual void boilWater() const {
		std::cout << "Boiling water" << std::endl;
	}
	protected: virtual void pourInCup() const {
		std::cout << "Pouring into cup" << std::endl;
	}
	protected: virtual bool customerWantsCondiments() {
		return true;
	}
};


#endif