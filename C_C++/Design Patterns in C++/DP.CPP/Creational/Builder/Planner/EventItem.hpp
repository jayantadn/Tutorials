#ifndef	_CPP_BUILDER_EVENT_ITEM_HPP_
#define _CPP_BUILDER_EVENT_ITEM_HPP_


class EventItem : public EventComponent {

	private: std::string _name;
	private: std::string _description;
	private: double _price;
 
	public: EventItem( const std::string name, const std::string description, double price = 0.0 ) :
		_name( name ), _description( description ), _price( price ) {
	}
	public: std::string getName() const {
		return _name;
	}
	public: std::string getDescription() const {
		return _description;
	}
	public: double getPrice() const {
		return _price;
	}
	public: void print() const {
		std::cout << "   " << getName().c_str();
		std::cout << " , " << getDescription().c_str();
		std::cout << "- $" << getPrice() << std::endl;
	}
};


#endif
