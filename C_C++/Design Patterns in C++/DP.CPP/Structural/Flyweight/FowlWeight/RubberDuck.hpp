#ifndef	_CPP_FLYWEIGHT_FOWLWEIGHT_RUBBER_DUCK_HPP_
#define _CPP_FLYWEIGHT_FOWLWEIGHT_RUBBER_DUCK_HPP_

#include "FowlWeight.hpp"


// ConcreteFlyweight

class RubberDuck : public Fowl {

	private: std::string _type;
	private: std::string _sound;
	private: std::string _swim;

	public: RubberDuck() :
		_type( "Rubber Duck" ), _sound( "Squeak" ), _swim( "floats" ) {
	}
	public: void quack() const {
		std::cout << _sound.c_str();
	}
	public: void swim() const {
		std::cout << _swim.c_str();
	}
	public: std::string toString() const {
		return _type.c_str();
	}
};


#endif