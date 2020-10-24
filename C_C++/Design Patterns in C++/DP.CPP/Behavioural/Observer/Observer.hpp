#ifndef	_CPP_OBSERVER_OBSERVER_HPP_
#define _CPP_OBSERVER_OBSERVER_HPP_

#include "WeatherStation.hpp"


class Observer {

	protected: virtual ~Observer() = 0 {
	};
	public: virtual void update(float temp, float humidity, float pressure) = 0;
};


#endif