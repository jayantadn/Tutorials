#ifndef	_CPP_TEMPLATE_BARISTA_TEA_WITH_HOOK_HPP_
#define _CPP_TEMPLATE_BARISTA_TEA_WITH_HOOK_HPP_

#include "Barista.hpp"

class TeaWithHook : public CaffeineBeverageWithHook {

 	public: void brew() const {
		std::cout << "Steeping the tea" << std::endl;
	}
 	public: void addCondiments() const {
		std::cout << "Adding Lemon" << std::endl;
	}
  	public: bool customerWantsCondiments() const {
		bool value = false;
		std::string answer = getUserInput();
		if( answer.find('y') != -1 ) {
			value = true;
		}
		return value;
	}
	private: std::string getUserInput() const {
		std::string value;
		std::cout << "Would you like lemon with your tea (y/n)? " << std::endl;
		std::cin >> value;
		return value;
	}
};


#endif
