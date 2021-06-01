#include<iostream>
#include <exception>
using namespace std;

 

void graceful()
{
    cout << "Encountered exception at the time of App. termination..." << endl;
    //statements here to handle the exception....
    cout << "Handled all exceptions..." << endl;
    exit(1);
}

 

int main()
{
    set_terminate(graceful);

 

    try
    {
        //..
        try
        {
            throw 10;
        }
        catch (int x)
        {
            cout << "catch-int, INNER block" << endl;
            throw;   //rethrowing exception
        }
    }
    catch (int x)
    {
        cout << "catch-int, OUTER block" << endl;
        throw 1;
    }
}