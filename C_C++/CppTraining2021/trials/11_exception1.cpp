#include<iostream>
using namespace std;

 

void divide(int x, int y)
{
    cout << "divide execution started..." << endl;
    cout << "quotient is:" << x / y << endl;
    cout << "divide execution completed..." << endl;
}

 

int main()
{
    cout << "main execution started..." << endl;
    try
	{
		divide(10, 0);
	}
	catch(...)
	{
		cout << "Exception occurred" << endl;
	}
	
    cout << "main execution completed..." << endl;
    return 0;
}