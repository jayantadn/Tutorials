#ifndef	_CPP_STRATEGY_DUCK_HPP_
#define _CPP_STRATEGY_DUCK_HPP_

#include "MiniDuckSimulator.hpp"


class Duck {


	private: std::auto_ptr< FlyBehavior > _flyBehavior;
	
	private: std::auto_ptr< QuackBehavior > _quackBehavior;
	private: std::auto_ptr< TestFlyBehavior > _tflyBehavior;
	


	private: Duck( const Duck& ); // Disable copy constructor
	private: void operator=( const Duck& ); // Disable assignment operator

	protected: Duck( FlyBehavior* flyBehavior, QuackBehavior* quackBehavior ) :
		_flyBehavior( flyBehavior ), _quackBehavior( quackBehavior ) 
		{
			assert( flyBehavior ); 
			assert( quackBehavior );
	}
	public: virtual ~Duck() = 0 {
	}
	public:	
		void setFlyBehavior( FlyBehavior* fb ) 
		{ 
			assert( fb );
		_flyBehavior = std::auto_ptr< FlyBehavior >( fb );
	}
	public: 
		void setQuackBehavior( QuackBehavior* qb ) 
		{ 
			assert( qb );
		 _quackBehavior = std::auto_ptr< QuackBehavior >( qb );
	}
	public: void performFly() const {
		_flyBehavior->fly();
	}
	public: void performQuack() const {
		_quackBehavior->quack();
	}
	public: void swim() const {
		std::cout << "All ducks float, even decoys!" << std::endl;
	}
	public: virtual void display() const = 0;
};


#endif