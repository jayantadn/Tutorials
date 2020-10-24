#ifndef	_CPP_ITERATOR_DINER_MERGER_PANCAKE_HOUSE_MENU_HPP_
#define _CPP_ITERATOR_DINER_MERGER_PANCAKE_HOUSE_MENU_HPP_


class PancakeHouseMenu : public Menu {

	private: std::vector< MenuItem* > _menuItems;
 
	private: PancakeHouseMenu( const PancakeHouseMenu& ); // Disable copy constructor
	private: void operator=( const PancakeHouseMenu& ); // Disable assignment operator

	public: PancakeHouseMenu() { 
		addItem( "K&B's Pancake Breakfast","Pancakes with scrambled eggs, and toast", true, 2.99 );
 		addItem( "Regular Pancake Breakfast","Pancakes with fried eggs, sausage", false, 2.99 );
 		addItem( "Blueberry Pancakes","Pancakes made with fresh blueberries", true, 3.49 );
 		addItem( "Waffles","Waffles, with your choice of blueberries or strawberries", true, 3.59 );
	}
	public: void addItem( std::string name, std::string description, bool vegetarian, double price ) {
		MenuItem* menuItem = new MenuItem( name, description, vegetarian, price );
		_menuItems.push_back( menuItem );
	}
	public: std::vector< MenuItem* > getMenuItems() const {
		return _menuItems;
	}
	public: Iterator<MenuItem>* createIterator() const {
		return dynamic_cast<Iterator<MenuItem>* > ( new PancakeHouseMenuIterator( _menuItems ) );
	}
	public: std::string toString() const {
		return "Objectville Pancake House Menu";
	}

	// other menu methods here
};


#endif
