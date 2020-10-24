#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_CEILING_FAN_ON_COMMAND_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_CEILING_FAN_ON_COMMAND_HPP_

#include "Remote.hpp"


class CeilingFanOnCommand : public Command {

	private: const CeilingFan* _ceilingFan;

	public: explicit CeilingFanOnCommand( const CeilingFan* ceilingFan ) :
		_ceilingFan( ceilingFan ) { assert( ceilingFan );
	}
	public: void execute() const {
		_ceilingFan->high();
	}
};


#endif