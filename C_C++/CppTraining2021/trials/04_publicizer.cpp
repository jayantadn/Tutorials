#include<iostream>
using namespace std;

 

//an example on publicizer technique.

 

class CA
{
public:
    void fun() { cout << "CA fun() called" << endl; }
    void fun(int x) { cout << "CA fun(int x) called" << endl; }
};

 
class CB : public CA
{
	public:
		using CA::fun;
		void fun(double x) { cout << "CB fun(double) called" << endl; }
};

//****consumer code************
int main()
{
    CB obj1;
    obj1.fun();
    obj1.fun(100);
    obj1.fun(100.12);
    return 0;
}