#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_CEILING_FAN_OFF_COMMAND_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_CEILING_FAN_OFF_COMMAND_HPP_

#include "Remote.hpp"


class CeilingFanOffCommand : public Command {

	private: const CeilingFan* _ceilingFan;

	public: explicit CeilingFanOffCommand( const CeilingFan* ceilingFan ) :
		_ceilingFan( ceilingFan ) { assert( ceilingFan );
	}
	public: void execute() const {
		_ceilingFan->off();
	}
};


#endif