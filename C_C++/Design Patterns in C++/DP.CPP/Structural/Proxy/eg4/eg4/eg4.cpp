#include <iostream>
#include <string>
using namespace std;

class String {
private:
   char*  str_;
public:
   friend ostream& operator << ( ostream&, String& );
   String() {
      cout << "   String ctor (def):" << endl;
      str_ = NULL;
   }
   String( const char* in ) {
      cout << "   String ctor: " << in << '.' << endl;
      str_ = new char[strlen(in) + 1];
      strcpy( str_, in );
   }
   String( String& str ) {
      cout << "   String ctor (copy): " << str.str_ << '.' << endl;
      str_ = new char[strlen(str.str_) + 1];
      strcpy( str_, str.str_ );
   }
   ~String() {
      cout << "   String dtor: " << str_ << '.' << endl;
      delete str_;
   }
   String& operator= ( String& rhs ) {
      if (this == &rhs)  return *this;
      delete str_;
      str_ = new char[strlen(rhs.str_) + 1];
      strcpy( str_, rhs.str_ );
      return *this;
   }

};

ostream& operator << ( ostream& os, String& str ) { return os << str.str_; }

void main( void ) {
   String  a( "hello" );
   String  b = "world";
   String  c( a );
   String  d = a;
   String  e;
   a = b;
   e = b;
   cout << "a is " << a << '.' << endl;
   cout << "b is " << b << '.' << endl;
   cout << "c is " << c << '.' << endl;
   cout << "d is " << d << '.' << endl;
   cout << "e is " << e << '.' << endl;
}

