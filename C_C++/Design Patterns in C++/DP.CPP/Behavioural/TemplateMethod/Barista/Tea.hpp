#ifndef	_CPP_TEMPLATE_BARISTA_TEA_HPP_
#define _CPP_TEMPLATE_BARISTA_TEA_HPP_

#include "Barista.hpp"


class Tea : public CaffeineBeverage {

	public: void brew() const {
		std::cout << "Steeping the tea" << std::endl;
	}
	public: void addCondiments() const {
		std::cout << "Adding Lemon" << std::endl;
	}
};


#endif