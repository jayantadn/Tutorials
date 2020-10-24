#!/bin/sh

g++ -isystem ../googletest/googletest/include/ -I../googletest/googletest -pthread -c ../googletest/googletest/src/gtest-all.cc 

ar -rv libgtest.a gtest-all.o

g++ -isystem ../googletest/googletest/include/ -pthread sample1.cc sample1_unittest.cc gtest_main.cc libgtest.a -o sample1
