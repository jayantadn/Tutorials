#ifndef	_CPP_FLYWEIGHT_FOWLWEIGHT_MALLARD_DUCK_HPP_
#define _CPP_FLYWEIGHT_FOWLWEIGHT_MALLARD_DUCK_HPP_

#include "FowlWeight.hpp"


// ConcreteFlyweight

class MallardDuck : public Fowl {

	private: std::string _type;
	private: std::string _sound;
	private: std::string _swim;

	public: MallardDuck() : 
		_type( "Mallard Duck" ), _sound( "Quack" ), _swim( "swims" ) {
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