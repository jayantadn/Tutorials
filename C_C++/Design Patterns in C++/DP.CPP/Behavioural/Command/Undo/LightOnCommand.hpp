#ifndef	_CPP_COMMAND_UNDO_LIGHT_ON_COMMAND_HPP_
#define _CPP_COMMAND_UNDO_LIGHT_ON_COMMAND_HPP_

#include "Undo.hpp"


class LightOnCommand : public Command {
	private: const Light* _light;
 
	public: explicit LightOnCommand( const Light* light) :
		_light(light) { assert(light);
	}
	public: void execute() const {
		_light->on();
	}
	public: void undo() const {
		_light->off();
	}
};


#endif