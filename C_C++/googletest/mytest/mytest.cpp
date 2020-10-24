#include "gtest/gtest.h"

#include <iostream>

#include "MyClass.hpp"
#include "GetArgv.hpp"
#include "MyMocks.hpp"

bool IsEven(int num) {
    return !(num%2);
}

testing::AssertionResult IsEvenAssert(int num) {
    if(num%2 == 0)
        return ::testing::AssertionSuccess();
    else
        return ::testing::AssertionFailure() << num << " is odd";
}

// TEST(TC_MyClass, pred) {
    // MyClass c(10);
    // ASSERT_PRED1( IsEven, c.getNum() );
// }

// TEST(TC_MyClass, predAssert) {
    // MyClass c(10);
    // EXPECT_TRUE( IsEvenAssert( c.getNum() ) );
// }

// TEST(TC_MyClass, print) {
    // MyClass c(10);
    // FAIL() << c;
// }

TEST(TC_MyClass, getargv) {
    GetArgv g;
    Mock_IGetArgv m;

    int STRSIZE = 100;
    int ARRSIZE = 10;
    
    char arr[ARRSIZE][STRSIZE];
    char* argv[ARRSIZE];
    for(int i=0; i<ARRSIZE; i++)
        argv[i] = &(arr[i][0]);
    
    EXPECT_CALL(m, func()).Times(1);
    EXPECT_CALL(m, get(::testing::_, ::testing::_, ::testing::_))
        .Times(1)
        .WillOnce( ::testing::DoAll( ::testing::SetArgReferee<2>(2),
                                     ::testing::SetArrayArgument<0>(&arr[0][0], &arr[0][STRSIZE])
                 ));
    
    MyClass c(10, m);
    c.useargs();
}

