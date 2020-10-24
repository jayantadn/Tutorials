#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_LIVINGROOM_LIGHT_OFF_COMMAND_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_LIVINGROOM_LIGHT_OFF_COMMAND_HPP_

#include "Remote.hpp"


class LivingroomLightOffCommand : public Command {

	private: const Light* _light;
 
	public: explicit LivingroomLightOffCommand( const Light* light ) :
		_light( light ) { assert( light );
	}
	public: void execute() const {
		_light->off();
	}
};


#endif