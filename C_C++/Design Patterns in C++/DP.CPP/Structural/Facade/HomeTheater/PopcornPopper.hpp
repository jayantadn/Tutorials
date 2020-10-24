#ifndef	_CPP_FACADE_HOME_THEATER_POPCORN_POPPER_HPP_
#define _CPP_FACADE_HOME_THEATER_POPCORN_POPPER_HPP_

#include "HomeTheater.hpp"


class PopcornPopper {

	private: std::string _description;
	
	private: PopcornPopper( const PopcornPopper& ); // Disable copy constructor
	private: void operator=( const PopcornPopper& ); // Disable assignment operator

	public: PopcornPopper( std::string description) :
		_description( description ) {
	}
 	public: void on() const {
		std::cout << _description.c_str() << " on" << std::endl;
	}
 	public: void off() const {
		std::cout << _description.c_str() << " off" << std::endl;
	}
	public: void pop() const {
		std::cout << _description.c_str() << " popping popcorn!" << std::endl;
	}
	public: std::string toString() const {
		return _description;
	}
};


#endif
