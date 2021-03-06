#include<iostream>
using namespace std;

 

//An example constructor and destructor behaviours with regard to inheritance and derived class instances.

 

class CA
{
private:
    int a, b;
public:
    CA() :a(0), b(0) { cout << "CA default constructor" << endl; }
    CA(int x) :a(x), b(x) { cout << "CA one arg. constructor" << endl; }
    CA(int x, int y) :a(x), b(y) { cout << "CA two arg. constructor" << endl; }
    CA(const CA& x) :a(x.a), b(x.b) { cout << "CA copy constructor" << endl; }
    ~CA() { cout << "CA destructor" << endl; }
};
class CB:public CA     // CB  IS-A CA
{
private:
    int a, b;
public:
    CB() :a(0), b(0) { cout << "CB default constructor" << endl; }
    CB(int x) :a(x), b(x) { cout << "CB one arg. constructor" << endl; }
    CB(int x, int y) :a(x), b(y) { cout << "CB two arg. constructor" << endl; }
    CB(const CB& x) :a(x.a), b(x.b) { cout << "CB copy constructor" << endl; }
    ~CB()     {     cout << "CB destructor" << endl;     } 
};

 

//***class consumers****
int main()
{
    CB obj1;
    // cout << "-----------------" << endl;
    // CB obj2(obj1);
    return 0;
}