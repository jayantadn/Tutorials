#ifndef	_CPP_COMMAND_UNDO_NO_COMMAND_HPP_
#define _CPP_COMMAND_UNDO_NO_COMMAND_HPP_

#include "Undo.hpp"


class NoCommand : public Command {

	public: void execute() const {
	};
	public: void undo() const {
	};
};


#endif