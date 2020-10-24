#include <iostream>

constexpr int STR_MAX = 10;
constexpr int STR_SIZE = 100;

class StringTable {
    private:
        int& trial;

    public:
        StringTable(int& t) : trial(t) {}
        int gett() { return trial; }
};

class Arguments : StringTable {
    private:
        int t;

    public:
        Arguments() : StringTable(t) {}
        void set(int tt) { t = tt; }
        int get() { return gett(); }
};

int main()
{
    Arguments arg;
    arg.set(2);
    std::cout << arg.get() << std::endl;

    return 0;
}

