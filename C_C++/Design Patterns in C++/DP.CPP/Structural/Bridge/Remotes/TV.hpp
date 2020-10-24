#ifndef	_CPP_BRIDGE_TV_HPP_
#define _CPP_BRIDGE_TV_HPP_

#include "Remotes.hpp"


class TV {
	protected: TV() {
	}
	public: virtual ~TV() = 0 {
	}
	public: virtual void on() = 0;
	public: virtual void off() = 0;
	public: virtual void tuneChannel( unsigned int channel ) = 0;
};


#endif