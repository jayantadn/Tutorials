@echo off

set SOURCES=*.cpp
set LIBS=libbotan-2.a

g++ -I. %SOURCES% %LIBS% -o main