#ifndef	_CPP_BRIDGE_SONY_CONTROL_HPP_
#define _CPP_BRIDGE_SONY_CONTROL_HPP_

#include "Remotes.hpp"


class SonyControl : public RemoteControl {

	private: unsigned int _currentStation;

	public: explicit SonyControl( const std::string& location ) :
		_currentStation( 0 ) {
		_implementor = new Sony( location );
	}
	public: void setStation( unsigned int channel ) {
		_currentStation = channel;
		setChannel( _currentStation );
	}
	public: void nextChannel() {
		_currentStation++;
		setChannel( _currentStation );
	}
	public: void previousChannel() {
		_currentStation--;
		setChannel( _currentStation );
	}
};


#endif