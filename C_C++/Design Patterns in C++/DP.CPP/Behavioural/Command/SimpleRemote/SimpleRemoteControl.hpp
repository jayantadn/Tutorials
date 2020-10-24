#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_CONTROL_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_CONTROL_HPP_

#include "SimpleRemote.hpp"

// Invkr

class SimpleRemoteControl {

	private: const Command* _slot;
 
	public: SimpleRemoteControl() :
		_slot( 0 ) {
	}
	public: void setCommand( const Command* command ) { assert( command );
		_slot = command;
	}
	public: void buttonWasPressed() const { assert( _slot );
		_slot->execute();
	}
};


#endif