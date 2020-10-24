#ifndef	_CPP_ITERATOR_DINER_MERGER_MENU_HPP_
#define _CPP_ITERATOR_DINER_MERGER_MENU_HPP_


class Menu {

	public: virtual ~Menu() = 0 {
	}
	public: virtual Iterator<MenuItem>* createIterator() const = 0;
};

#endif