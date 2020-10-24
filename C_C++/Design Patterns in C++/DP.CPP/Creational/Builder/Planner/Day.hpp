#ifndef	_CPP_BUILDER_DAY_HPP_
#define _CPP_BUILDER_DAY_HPP_


//
// Day 'decorates' and 'Event Component' with a 'date'
//
class Day : public EventComponent {

	private: const Event* _event;
	private: tm _date;

	public: Day( const Event* event, const tm& date ) :
		_event( event ), _date( date ) { assert( event );
	}
	public: ~Day() {
		delete _event;
	}
	public: EventComponent* add( EventComponent* event ) { assert( _event );
		return const_cast< Event* >( _event )->add( event );
	}
	public: void print() const { assert( _event );
		std::cout << itos( _date.tm_year+1900 ).c_str() << "-";
		std::cout << itos( _date.tm_mon+1 ).c_str() <<  "-";
		std::cout << itos( _date.tm_mday ).c_str() << " : ";
		_event->print();
	}
};


#endif
