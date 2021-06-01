#include<iostream>
using namespace std;

 

//An example on const_cast, try removing the constness of an object.

 

class CA
{
private:
    int a, b;
public:
    CA(int x = 0, int y = 0): a(x), b(y) {}
    void input()   //WRITE operation
    {
        cout << "Enter 2 nos." << endl;
        cin >> a >> b;
    }
    void print() const  //READ-ONLY operation
    {
        cout << "a:" << a << ",b=" << b << endl;
    }
};

 

//***class consumer**********
int main()
{
    const CA* p = new(nothrow) CA;
    // p->input();
    p->print();

	CA* q = const_cast<CA*>(p); // converts a const to non-const
	q->input();
	q->print();


    delete p;
    return 0;
}