#!/bin/sh

CC=gcc
TARGET_SENDER=sender.out
TARGET_RECEIVER=receiver.out
CFLAGS=-Wall
LIBS="-lrt"
DEFINES=
INCLUDES=
SOURCES_SENDER="Sender.c"
SOURCES_RECEIVER="Receiver.c"

echo Compiling $TARGET_SENDER
$CC -o $TARGET_SENDER $CFLAGS $DEFINES $INCLUDES $SOURCES_SENDER $LIBS

echo Compiling $TARGET_RECEIVER
$CC -o $TARGET_RECEIVER $CFLAGS $DEFINES $INCLUDES $SOURCES_RECEIVER $LIBS