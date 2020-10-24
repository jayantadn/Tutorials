#ifndef	_CPP_COMMAND_REMOTE_COMMAND_HPP_
#define _CPP_COMMAND_REMOTE_COMMAND_HPP_

#include "Remote.hpp"


class Command {

	private: Command( const Command& ); // Disable copy constructor
	private: void operator=( const Command& ); // Disable assignment operator

	protected: Command() {
	}
	public: virtual ~Command() = 0 {
	}
	public: virtual void execute() const = 0;
};


#endif