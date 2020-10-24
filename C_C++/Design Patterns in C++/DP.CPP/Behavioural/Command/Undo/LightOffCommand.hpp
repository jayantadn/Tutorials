#ifndef	_CPP_COMMAND_UNDO_LIGHT_OFF_COMMAND_HPP_
#define _CPP_COMMAND_UNDO_LIGHT_OFF_COMMAND_HPP_

#include "Undo.hpp"


class LightOffCommand : public Command {

	private: const Light* _light;
 
	public: explicit LightOffCommand( const Light* light ) :
		_light( light ) { 
		assert( light );
	}
	public: void execute() const {
		_light->off();
	}
	public: void undo() const {
		_light->on();
	}
};


#endif