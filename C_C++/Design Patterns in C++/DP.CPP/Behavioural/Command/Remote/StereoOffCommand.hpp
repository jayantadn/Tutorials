#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_STEREO_OFF_COMMAND_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_STEREO_OFF_COMMAND_HPP_

#include "Remote.hpp"


class StereoOffCommand : public Command {
 
	private: const Stereo* _stereo;
 
	public: explicit StereoOffCommand( const Stereo* stereo ) :
		_stereo( stereo ) { assert( stereo );
	}
	public: void execute() const {
		_stereo->off();
	}
};


#endif