#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_GARAGE_DOOR_DOWN_COMMAND_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_GARAGE_DOOR_DOWN_COMMAND_HPP_

#include "Remote.hpp"


class GarageDoorDownCommand : public Command {

	private: const GarageDoor* _garageDoor;

	public: explicit GarageDoorDownCommand( const GarageDoor* garageDoor ) :
		_garageDoor( garageDoor ) { assert( garageDoor );
	}
	public: void execute() const {
		_garageDoor->down();
	}
};


#endif