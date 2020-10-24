#ifndef	_CPP_BUILDER_VACATION_HPP_
#define _CPP_BUILDER_VACATION_HPP_

#include "Planner.hpp"


class Vacation {

	private: const Event& _allEvents;

	private: Vacation( const Vacation& ); // Disable copy constructor
	private: void operator=( const Vacation& ); // Disable assignment operator

	public: Vacation( const Event& allEvents ) :
		_allEvents( allEvents ) {
	}
	public: void printItinerary() const {
		std::cout << std::endl;
		_allEvents.print();
	}
};


#endif
