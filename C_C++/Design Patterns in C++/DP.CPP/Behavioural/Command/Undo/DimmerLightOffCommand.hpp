#ifndef	_CPP_COMMAND_UNDO_DIMMER_LIGHT_OFF_COMMAND_HPP_
#define _CPP_COMMAND_UNDO_DIMMER_LIGHT_OFF_COMMAND_HPP_

#include "Undo.hpp"


class DimmerLightOffCommand : public Command {

	private: const Light* _light;
	private: mutable int _prevLevel;
 
	public: explicit DimmerLightOffCommand( const Light* light ) :
		_light( light ) { assert( light );
		_prevLevel = _light->getLevel();
	}
	public: void execute() const {
		_prevLevel = _light->getLevel();
		_light->off();
	}
	public: void undo() const {
		_light->dim( _prevLevel );
	}
};

#endif