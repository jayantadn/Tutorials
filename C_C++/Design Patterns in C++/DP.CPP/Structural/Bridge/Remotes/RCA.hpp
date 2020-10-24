#ifndef	_CPP_BRIDGE_RCA_HPP_
#define _CPP_BRIDGE_RCA_HPP_

#include "Remotes.hpp"


class RCA : public TV {

	private: std::string _location;

	public: explicit RCA( const std::string& location ) : 
		_location( location ) {
	}
	public: void on() {
		std::cout << "RCA " << _location.c_str() << " TV is on" << std::endl;
	}
	public: void off() {
		std::cout << "RCA " << _location.c_str() << " TV is off" << std::endl;
	}
	public: void tuneChannel(unsigned int channel) {
		std::cout << "RCA " << _location.c_str() << " tuned to channel " << channel << std::endl;
	}
};


#endif