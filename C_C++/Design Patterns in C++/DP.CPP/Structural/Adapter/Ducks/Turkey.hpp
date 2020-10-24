#ifndef	_CPP_ADAPTER_TURKEY_HPP_
#define _CPP_ADAPTER_TURKEY_HPP_

#include "Ducks.hpp"


class Turkey {

	public: virtual ~Turkey() = 0 {
	}
	public: virtual void gobble() const = 0;
 	public: virtual void fly() const = 0;
};


#endif
