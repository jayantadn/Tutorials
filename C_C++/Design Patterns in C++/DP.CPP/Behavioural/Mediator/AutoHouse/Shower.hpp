#ifndef	_CPP_MEDIATOR_AUTO_HOUSE_SHOWER_HPP_
#define _CPP_MEDIATOR_AUTO_HOUSE_SHOWER_HPP_


class Shower : public Appliance {
	public: Shower( Mediator* mediator ) : 
		Appliance( mediator ) { assert( mediator );
	}
	public: void off() {
		_mediator->output( "Shower is off" );
	}
	public: void on( unsigned long value ) {
		_mediator->output( "Shower is on" );
	}
	public: void onEvent( unsigned long value ) const {
		_mediator->onEvent( this, value );
	}
};


#endif