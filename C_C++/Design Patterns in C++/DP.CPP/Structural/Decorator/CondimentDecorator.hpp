#ifndef	_CPP_DECORATOR_CONDIMENT_HPP_
#define _CPP_DECORATOR_CONDIMENT_HPP_

#include "Starbuzz.hpp"


class CondimentDecorator : public Beverage {

	private: CondimentDecorator( const CondimentDecorator& ); // Disable copy constructor
	private: void operator=( const CondimentDecorator& ); // Disable assignment operator

	protected: CondimentDecorator() {
	}
	public: virtual ~CondimentDecorator() = 0 {
	};
	public: virtual std::string getDescription() const = 0;
};


#endif