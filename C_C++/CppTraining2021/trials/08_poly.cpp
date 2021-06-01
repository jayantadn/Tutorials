#include<iostream>

#pragma pack(4)

using namespace std;
/*
    - Introduce a layer class, whose purpose is to only act as a BASE kind, and serve
      as a frame-work for the derived ones.
    - Instances of this class should not be permitted as it is supposed to be a
      GENERALIZED class.
*/
class shape
{
protected:
    //void* vfptr;   //added by the compiler as the first data member
public:
    /*    
    shape():vfptr(&shape::VFTABLE)
    {
        //compiler will assume a default constructor
    }
    */
    //Over-ridable methods
    virtual void draw() { }
    virtual ~shape() { }
};

 

class circle:public shape   //circle IS-A shape
{

 

private:
    int radius;
public:
    circle(int x = 0) :/* shape(), vfptr(&circle::VFTABLE), */radius(x)
    {
        cout << "Circle constructor" << endl;
    }
    //OVER-RIDING methods
     void draw() { cout << "circle drawn" << endl; }
     ~circle() { cout << "Circle destructor" << endl; }
};

 

class rectangle :public shape
{
private:
    int length, breadth;
public:
    rectangle(int x = 0, int y = 0) :/* shape(), vfptr(&rectangle::VFTABLE), */ length(x), breadth(y)
    {
        cout << "rectangle constructor" << endl;
    }
    //OVER-RIDING methods
    void draw() { cout << "rectangle drawn" << endl; }
    ~rectangle() { cout << "rectangle destructor" << endl; }
};

 

class triangle :public shape
{
private:
    int base, height;
public:
    triangle(int x = 0, int y = 0) :/* shape(), vfptr(&triangle::VFTABLE), */base(x), height(y)
    {
        cout << "triangle constructor" << endl;
    }
    void draw() { cout << "triangle drawn" << endl; }
    ~triangle() { cout << "triangle destructor" << endl; }
};

 

//*******************new extension add's up *********************
class polygon :public shape
{
private:
    //..
public:
    polygon() { cout << "polygon constructor" << endl; }
    ~polygon() { cout << "polygon destructor" << endl; }
    void draw() { cout << "polygon drawn..." << endl; }
};

 

//*******************************

 


void graphics(shape *);

 

int main()
{
    cout << "size of circle object " << sizeof(circle) << endl;
    cout << "size of rectangle object " << sizeof(rectangle) << endl;
    cout << "size of triangle object " << sizeof(triangle) << endl;
    circle *c = new(nothrow) circle;
    graphics(c);
    cout << "-----------------------" << endl;
    rectangle *r = new(nothrow) rectangle;
    graphics(r);
    cout << "-----------------------" << endl;
    triangle *t = new(nothrow) triangle;
    graphics(t);
    cout << "-----------------------" << endl;
    polygon *p = new(nothrow) polygon;
    graphics(p);
	
	return 0;
}

 

//Function adhere's to OPEN-CLOSED PRINCIPLE
//It is open to new extension's [rectangle,triangle,polygon, etc..], but closed to changes
//to himself.
void graphics(shape *p)
{
    p->draw();
    //...
    delete p;
}