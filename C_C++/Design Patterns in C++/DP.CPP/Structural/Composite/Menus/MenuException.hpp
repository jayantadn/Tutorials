#ifndef	_CPP_COMPOSITE_MENUS_EXCEPTION_HPP_
#define _CPP_COMPOSITE_MENUS_EXCEPTION_HPP_


class UnsupportedOperationException : public std::exception {

	private: std::string _message;
			
	public: UnsupportedOperationException() : 
		std::exception() {
	}
	public: UnsupportedOperationException( const std::string message ) : 
		std::exception( message.c_str() ), _message( message ) {
	}
	public: std::string getMessage() const {
		return _message;
	}
};


#endif
