#include <iostream>
#include <WinSock2.h>
#include <string>

#pragma comment( lib, "ws2_32.lib" )

using namespace std;

int main()
{
	/* Create the socket */

	WSADATA wsadata;
	WSAStartup(MAKEWORD(2, 2), &wsadata);

	SOCKET socket_server = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);

	SOCKADDR_IN info_server;
	info_server.sin_family = AF_INET;
	info_server.sin_addr.s_addr = INADDR_ANY;
	info_server.sin_port = htons(8888);

	bind(socket_server, (SOCKADDR*)(&info_server), sizeof(info_server));

	listen(socket_server, 1);

	SOCKET socket_temp = SOCKET_ERROR;
	while (socket_temp == SOCKET_ERROR)
	{
		cout << "Waiting for incoming connection...\n";
		socket_temp = accept(socket_server, NULL, NULL);
	}
	socket_server = socket_temp;
	cout << "Connection successful\n";


	/* Sending data to client*/

	char* buf = "Welcome to the server\n";
	send(socket_server, buf, strlen(buf), 0);

	/* closing the socket */
	
	shutdown(socket_server, SD_SEND);
	closesocket(socket_server);
	WSACleanup();

	cout << "End of server";
	return 0;
}