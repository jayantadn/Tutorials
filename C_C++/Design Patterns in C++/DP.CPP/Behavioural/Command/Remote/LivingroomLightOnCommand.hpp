#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_LIVINGROOM_LIGHT_ON_COMMAND_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_LIVINGROOM_LIGHT_ON_COMMAND_HPP_

#include "Remote.hpp"


class LivingroomLightOnCommand : public Command {

	private: const Light* _light;
 
	public: explicit LivingroomLightOnCommand( const Light* light ) :
		_light( light ) { assert( light );
	}
	public: void execute() const {
		_light->on();
	}
};


#endif