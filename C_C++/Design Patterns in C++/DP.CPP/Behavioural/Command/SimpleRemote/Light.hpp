#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_LIGHT_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_LIGHT_HPP_

#include "SimpleRemote.hpp"

// recvr
class Light {

	public: Light() {
	}
	public: void on() const {
		std::cout << "Light is on" << std::endl;
	}
	public: void off() const {
		std::cout << "Light is off" << std::endl;
	}
};

#endif