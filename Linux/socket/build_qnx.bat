@echo off

call C:\Users\jyd1kor\qnx700\qnxsdp-env.bat

x86_64-pc-nto-qnx7.0.0-gcc -lsocket server.c -o server
x86_64-pc-nto-qnx7.0.0-gcc -lsocket client.c -o client

pause