#ifndef	_CPP_ITERATOR_DINER_MERGER_I_MENU_HPP_
#define _CPP_ITERATOR_DINER_MERGER_I_MENU_HPP_


class Menu {
	public: virtual Iterator<MenuItem>* createIterator() const = 0;
	public: virtual ~Menu() = 0 {
	}
};


#endif