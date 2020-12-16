#ifndef	_CPP_ITERATOR_DINER_MERGER_ITERATOR_HPP_
#define _CPP_ITERATOR_DINER_MERGER_ITERATOR_HPP_


template <class T>
class Iterator {

	public: virtual ~Iterator() = 0 {
	}
	public: virtual bool hasNext() const = 0;
	public: virtual T* next() const = 0;
};


#endif