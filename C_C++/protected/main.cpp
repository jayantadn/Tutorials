#include <iostream>

class Interface {
    public:
        virtual void api() = 0;
};

class Real : public Interface {
    public:
        void api() { std::cout << "This is the real implementation" << std::endl; }
};

class Mock : public Interface {
    public:
        void api() { std::cout << "This is the mock implementation" << std::endl; }
};

class Base {
    protected:
        int init;
        int var;
        Real real;
        Interface& iface;
    
    public:
        Base(int i) : iface(real), init(i), var(10) {}
        void printVar() { std::cout << var << std::endl; }
};

class Derived : public Base {
    public:
        Derived(Interface& i) : Base(1) { Base::var = 20; iface = i; }
        void apicall() { iface.api(); }
};

int main() {
    Mock m;
    Derived d(m);
    d.apicall();
        
    return 0;
}

