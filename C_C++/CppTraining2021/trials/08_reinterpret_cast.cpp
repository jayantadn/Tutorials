#include<iostream>
using namespace std;
 
//An example on reinterpret_cast.
 
class CA
{
public:
    void fun1() { cout << "CA fun1 called" << endl; }
};
 
class CB
{
public:
    void fun2() { cout << "CB fun2 called" << endl; }
};
 
//***consumer code ****
int main()
{
    CA* p = new(nothrow) CA;
    p->fun1();
    cout << "---------------" << endl;
    CB* q = reinterpret_cast<CB*>(p);
    q->fun2();
 
    delete q;
    return 0;
}