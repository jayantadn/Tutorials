#include<iostream>
using namespace std;

 

class MyException
{
public:
    virtual const char* what() = 0;
};
class Error1 :public MyException
{
public:
    const char* what() { return "Error1 - exception"; }
};

 

class Error2 :public MyException
{
public:
    const char* what() { return "Error2 - exception"; }
};

 

class Error3 :public MyException
{
public:
    const char* what() { return "Error3 - exception"; }
};

 

//***consumer code***********
int main()
{
    try
    {
        throw Error1();
    }
    catch (MyException &x)
    {
        cout << x.what() << endl;
    }
    return 0;
}