#include <iostream>
#include <WinSock2.h>
#include <WS2tcpip.h>

#pragma comment( lib, "Ws2_32.lib" )

using namespace std;

int main()
{
	SOCKET client_socket;
	client_socket = INVALID_SOCKET;
	client_socket = accept( client_socket)

	cout << "Client looks ok \n";
	return 0;
}