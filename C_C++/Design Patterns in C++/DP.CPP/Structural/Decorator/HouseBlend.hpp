#ifndef	_CPP_DECORATOR_HOUSE_BLEND_HPP_
#define _CPP_DECORATOR_HOUSE_BLEND_HPP_

#include "Starbuzz.hpp"


class HouseBlend : public Beverage { 

	public: HouseBlend() {
		_description = "House Blend Coffee";
	}
	public: double cost() const {
		return 0.89;
	}
};


#endif