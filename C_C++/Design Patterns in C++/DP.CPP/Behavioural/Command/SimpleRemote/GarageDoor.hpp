#ifndef	_CPP_COMMAND_SIMPLE_REMOTE_GARAGE_DOOR_HPP_
#define _CPP_COMMAND_SIMPLE_REMOTE_GARAGE_DOOR_HPP_

#include "SimpleRemote.hpp"


class GarageDoor {

	public: GarageDoor() {
	}
	public: void up() const {
		std::cout << "Garage Door is Open" << std::endl;
	}
	public: void down() const {
		std::cout << "Garage Door is Closed" << std::endl;
	}
	public: void stop() const {
		std::cout << "Garage Door is Stopped" << std::endl;
	}
	public: void lightOn() const {
		std::cout << "Garage light is on" << std::endl;
	}
	public: void lightOff() const {
		std::cout << "Garage light is off" << std::endl;
	}
};


#endif