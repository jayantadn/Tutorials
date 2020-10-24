#ifndef	_CPP_ADAPTER_DUCK_HPP_
#define _CPP_ADAPTER_DUCK_HPP_

#include "Ducks.hpp"


class Duck {

	public: virtual ~Duck() = 0 {
	}
 	public: virtual void fly() const = 0;
	public: virtual void quack() const = 0;
};


#endif
