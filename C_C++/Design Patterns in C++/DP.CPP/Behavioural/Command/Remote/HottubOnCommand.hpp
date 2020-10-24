#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_HOTTUB_ON_COMMAND_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_HOTTUB_ON_COMMAND_HPP_

#include "Remote.hpp"


class HottubOnCommand : public Command {

	private: const Hottub* _hottub;

	public: explicit HottubOnCommand( const Hottub* hottub ) :
		_hottub( hottub ) { assert( hottub );
	}
	public: void execute() const {
		_hottub->on();
		_hottub->heat();
		_hottub->bubblesOn();
	}
};


#endif