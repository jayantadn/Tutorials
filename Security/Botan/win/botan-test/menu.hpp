#ifndef _MENU_H_
#define _MENU_H_

#include <string>
#include <functional>
#include <vector>

struct MenuItem {
    std::string str;
    std::function<void(void)> func;
};

class Menu {
public:    
    void addItem(MenuItem& item);
    void display();

private:    
	std::vector<MenuItem> itemlist;
};

#endif