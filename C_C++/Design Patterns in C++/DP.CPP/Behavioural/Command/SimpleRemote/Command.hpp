#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_COMMAND_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_COMMAND_HPP_

#include "SimpleRemote.hpp"


class Command {

	public: virtual ~Command() = 0 {
	}
	public: virtual void execute() const = 0;
};


#endif