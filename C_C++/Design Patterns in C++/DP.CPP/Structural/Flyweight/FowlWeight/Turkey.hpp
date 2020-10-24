#ifndef	_CPP_FLYWEIGHT_FOWLWEIGHT_TURKEY_HPP_
#define _CPP_FLYWEIGHT_FOWLWEIGHT_TURKEY_HPP_

#include "FowlWeight.hpp"


// Abstract Flyweight

class Turkey {

	public: virtual ~Turkey() = 0 {
	}
	public: virtual void gobble() const = 0;
	public: virtual void walk() const = 0;
	public: virtual std::string toString() const = 0;
};


#endif