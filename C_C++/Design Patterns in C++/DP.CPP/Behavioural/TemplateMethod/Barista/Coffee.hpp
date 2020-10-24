#ifndef	_CPP_TEMPLATE_BARISTA_COFFEE_HPP_
#define _CPP_TEMPLATE_BARISTA_COFFEE_HPP_

#include "Barista.hpp"


class Coffee : public CaffeineBeverage {

	public: void brew() const {
		std::cout << "Dripping Coffee through filter" << std::endl;
	}
	public: void addCondiments() const {
		std::cout << "Adding Sugar and Milk" << std::endl;
	}
};


#endif