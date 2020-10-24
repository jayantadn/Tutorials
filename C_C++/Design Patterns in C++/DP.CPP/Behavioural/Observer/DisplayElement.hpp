#ifndef	_CPP_OBSERVER_DISPLAY_ELEMENT_HPP_
#define _CPP_OBSERVER_DISPLAY_ELEMENT_HPP_

#include "WeatherStation.hpp"


class DisplayElement {
	public: virtual void display() const = 0;
	protected: virtual ~DisplayElement() = 0 {
	};
};


#endif