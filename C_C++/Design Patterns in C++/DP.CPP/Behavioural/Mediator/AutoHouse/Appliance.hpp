#ifndef	_CPP_MEDIATOR_AUTO_HOUSE_APPLICANCE_HPP_
#define _CPP_MEDIATOR_AUTO_HOUSE_APPLICANCE_HPP_


class Mediator;

class Appliance {
	protected: const Mediator* _mediator;

	protected: Appliance( const Mediator* mediator) :
		_mediator( mediator ) { assert( mediator );
	}
	public: virtual ~Appliance() = 0 {
	}
	public: virtual void off() = 0;
	public: virtual void on( unsigned long value  ) = 0;
	public: virtual void onEvent( unsigned long value ) const = 0;
};


#endif