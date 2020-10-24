#include <iostream>

constexpr int STR_MAX = 10;
constexpr int STR_SIZE = 100;

class StringTable {
    private:
        char (&tableref)[STR_MAX][STR_SIZE];

    public:
        StringTable(char (&t)[STR_MAX][STR_SIZE]) : tableref(t) {}
};

class Arguments {
    private:
        char table[STR_MAX][STR_SIZE];

    public:
        Arguments() {}
};

int main()
{
    Arguments arg;

    return 0;
}

