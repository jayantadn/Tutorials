#!/bin/sh

[ -e _bin ] || mkdir _bin

g++ -isystem ../googletest/googletest/include/ -I../googletest/googletest -pthread -c ../googletest/googletest/src/gtest-all.cc -o _bin/gtest-all.o
g++ -isystem ../googletest/googlemock/include/ -I../googletest/googletest/include -I../googletest/googlemock -pthread -c ../googletest/googlemock/src/gmock-all.cc -o _bin/gmock-all.o

ar -rv _bin/libgtest.a _bin/gtest-all.o
ar -rv _bin/libgmock.a _bin/gmock-all.o

g++ -isystem ../googletest/googletest/include/ -I../googletest/googlemock/include -pthread main.cpp MyClass.cpp mytest.cpp GetArgv.cpp  _bin/libgtest.a _bin/libgmock.a -o _bin/mytest.exe
