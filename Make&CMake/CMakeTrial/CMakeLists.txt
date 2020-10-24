cmake_minimum_required( VERSION 2.8 )

project( test )

set( CMAKE_BINARY_DIR ${CMAKE_SOURCE_DIR}/_bin )
set( EXECUTABLE_OUTPUT_PATH ${CMAKE_BINARY_DIR} )
set( LIBRARY_OUTPUT_PATH ${CMAKE_BINARY_DIR} )

include_directories( "${PROJECT_SOURCE_DIR}" )

add_executable( test ${PROJECT_SOURCE_DIR}/test.cpp )
