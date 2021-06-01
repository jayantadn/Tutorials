#include<iostream>
using namespace std;

 

//an example on dynamic_cast

 

class shape
{
public:
    virtual void draw() = 0;
};

 

class circle :public shape { public: void draw() { } };
class rectangle :public shape { public: void draw() { } };
class triangle :public shape { public: void draw() { } };

 

//******consumer code**********

 

void FindShape(shape* p)
{
    circle* c = dynamic_cast<circle*>(p);
    rectangle* r = dynamic_cast<rectangle*>(p);
    triangle* t = dynamic_cast<triangle*>(p);
    if (c != NULL)
        cout << "object is circle" << endl;
    if (r != NULL)
        cout << "object is rectangle" << endl;
    if (t != NULL)
        cout << "object is triangle" << endl;
}

 

int main()
{
    circle* c = new(nothrow) circle;
    FindShape(c);
    return 0;
}