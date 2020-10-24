#ifndef	_CPP_BUILDER_BUILDER_HPP_
#define _CPP_BUILDER_BUILDER_HPP_

#include "Planner.hpp"


class Builder {

	protected: Builder() {
	}
	protected: virtual ~Builder() = 0 {
	}
	public: virtual void buildDay( const tm& date ) = 0;
	public: virtual void addHotel( const std::string& hotel ) = 0;
	public: virtual void addTickets( const std::string& event ) = 0;
	public: virtual void addReservations( const std::string& event ) = 0;
	public: virtual void addSpecialEvent( const std::string& event ) = 0;
	public: virtual Vacation* getVacationPlanner() = 0;
};


#endif
