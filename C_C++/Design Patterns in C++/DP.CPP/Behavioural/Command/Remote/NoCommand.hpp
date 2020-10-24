#ifndef	_CPP_COMMAND_REMOTE_NO_COMMAND_HPP_
#define _CPP_COMMAND_REMOTE_NO_COMMAND_HPP_

#include "Remote.hpp"


class NoCommand : public Command{

	public: void execute() const {
	};
};


#endif