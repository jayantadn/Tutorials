#include <iostream>
#include <WinSock2.h>
#include <WS2tcpip.h>

#pragma comment( lib, "Ws2_32.lib" )

using namespace std;

#define DEFAULT_PORT "27015"

int main()
{
	/* Initialize Winsock */
	WSADATA wsaData;
	int res = WSAStartup(MAKEWORD(2, 2), &wsaData);
	if ( res != 0 )
	{
		cout << "Winsock initialization failed. Error Code: " << res << endl;
		return 1;
	}

	/* Initialize the port address */
	struct addrinfo *result = NULL, hints;
	ZeroMemory(&hints, sizeof(hints));
	hints.ai_family = AF_INET;
	hints.ai_socktype = SOCK_STREAM;
	hints.ai_protocol = IPPROTO_TCP;
	hints.ai_flags = AI_PASSIVE;
	res = getaddrinfo(NULL, DEFAULT_PORT, &hints, &result );
	if (res != 0)
	{
		cout << "Initialize port address failed. Error Code: " << res << endl;
		WSACleanup();
		return 1;
	}

	/* Create socket */
	SOCKET server_socket = INVALID_SOCKET;
	server_socket = socket(result->ai_family, result->ai_socktype, result->ai_protocol);
	if (server_socket == INVALID_SOCKET)
	{
		cout << "Create socket failed. Error Code: " << server_socket << endl;
		WSACleanup();
		return 1;
	}

	/* Bind the socket */
	res = bind(server_socket, result->ai_addr, result->ai_addrlen);
	if (res != 0)
	{
		cout << "Bind failed. Error code: " << WSAGetLastError() << endl;
		freeaddrinfo(result);
		closesocket(server_socket);
		WSACleanup();
		return 1;
	}

	/* Listen to the socket */
	res = listen( server_socket, SOMAXCONN );
	if (res != 0)
	{
		cout << "Listen failed. Error code: " << WSAGetLastError() << endl;
		closesocket(server_socket);
		WSACleanup();
		return 1;
	}


	cout << "Server looks ok \n";
	return 0;
}
