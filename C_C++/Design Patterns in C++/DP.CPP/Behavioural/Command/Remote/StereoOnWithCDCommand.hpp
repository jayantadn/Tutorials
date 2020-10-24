#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_STEREO_ON_COMMAND_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_STEREO_ON_COMMAND_HPP_

#include "Remote.hpp"


class StereoOnWithCDCommand : public Command {

	private: const Stereo* _stereo;
 
	public: explicit StereoOnWithCDCommand( const Stereo* stereo ) :
		_stereo( stereo ) { assert( stereo );
	}
	public: void execute() const {
		_stereo->on();
		_stereo->setCD();
		_stereo->setVolume(11);
	}
};


#endif