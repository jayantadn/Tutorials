#include<iostream>
using namespace std;

void graceful()
{
    cout << "Encountered exception at the of App. termination..." << endl;
    //statements here to handle the exception....
    cout << "Handled all exceptions..." << endl;
    exit(1);
}

void divide(int x, int y)
{
    cout << "divide execution started..." << endl;
	
	if(y==0) 
		throw y;
	
    cout << "quotient is:" << x / y << endl;
    cout << "divide execution completed..." << endl;
}

 

int main()
{
    cout << "main execution started..." << endl;
	
	set_terminate(graceful);
	
    try
	{
		divide(10, 0);
	}
	catch(int)
	{
		cout << "divide by zero" << endl;
		throw;
	}
	catch(...)
	{
		cout << "Exception occurred" << endl;
	}
	
    cout << "main execution completed..." << endl;
    return 0;
}