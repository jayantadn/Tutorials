#include<fstream>
#include<iostream>
using namespace std;

 

class person
{
private:
    char name[40];
    int age;
public:
    void getdata()
    {
        cout << "enter name" << endl;
        cin >> name;
        cout << "enter age" << endl;
        cin >> age;
    }
};

 

int main()
{
    person p;
    p.getdata();

    ofstream outfile("person.dat");
    outfile.write((char *) &p, sizeof(p));
	
	return 0;
}