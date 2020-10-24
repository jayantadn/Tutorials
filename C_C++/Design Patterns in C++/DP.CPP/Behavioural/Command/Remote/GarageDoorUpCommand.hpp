#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_GARAGE_DOOR_UP_COMMAND_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_GARAGE_DOOR_UP_COMMAND_HPP_

#include "Remote.hpp"


class GarageDoorUpCommand : public Command {

	private: const GarageDoor* _garageDoor;

	public: explicit GarageDoorUpCommand( const GarageDoor* garageDoor ) :
		_garageDoor( garageDoor ) { assert( garageDoor );
	}
	public: void execute() const {
		_garageDoor->up();
	}
};


#endif