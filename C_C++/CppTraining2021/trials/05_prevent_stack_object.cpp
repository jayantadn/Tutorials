#include<iostream>
using namespace std;

 

class CA
{
private:
    CA() { }
public:
    static CA* create_heapinst()
    {
        return new CA;
    }
};

 

int main()
{
    CA *p = CA::create_heapinst();
    // CA obj;
	delete p;
	return 0;
}