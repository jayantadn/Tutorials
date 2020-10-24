#ifndef	_CPP_FLYWEIGHT_FOWLWEIGHT_TURKEY_ADAPTER_HPP_
#define _CPP_FLYWEIGHT_FOWLWEIGHT_TURKEY_ADAPTER_HPP_

#include "FowlWeight.hpp"


// ConcreteFlyweight

class TurkeyAdapter : public Fowl {

	private: std::auto_ptr< const Turkey > _turkey;

	private: TurkeyAdapter( const TurkeyAdapter& ); // Disable copy constructor
	private: void operator=( const TurkeyAdapter& ); // Disable assignment operator

	public: explicit TurkeyAdapter( const Turkey* turkey ) :
		_turkey( turkey ) { assert( turkey );
	}
	public: void quack() const { assert( _turkey.get() );
		_turkey->gobble();
	}
	public: void swim() const { assert( _turkey.get() );
		_turkey->walk();
	}
	public: std::string toString() const { assert( _turkey.get() );
		return _turkey->toString();
	}
};


#endif