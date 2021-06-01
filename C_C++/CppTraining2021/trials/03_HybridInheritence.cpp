#include<iostream>
using namespace std;

 

class CA
{
public:
    int a;
};

 

class CB:  virtual public CA
{
public:
    int b;
};

 

class CC:  virtual public CA
{
public:
    int c;
};

 

class CD :public CB, public CC
{
public:
    int d;
};

 

//***********************
int main()
{
    cout <<"size of CD object" << sizeof(CD) << endl;
    CD obj1;
    obj1.a=100;
	
	return 0;
}