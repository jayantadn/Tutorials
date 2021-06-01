#include <iostream>

#include "menu.hpp"

void Menu::addItem(MenuItem& item) {
    this->itemlist.push_back(item);
}

void Menu::display() {
    for(auto i=0; i<itemlist.size(); i++) {
        std::cout << i << ". " << itemlist[i].str << std::endl;
    }

    std::cout << "Enter your choice: ";
    int choice;
    std::cin >> choice;

    itemlist[choice].func();
}