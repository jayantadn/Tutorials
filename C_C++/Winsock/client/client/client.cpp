#include <iostream>
#include <WinSock2.h>

#pragma comment( lib, "ws2_32.lib")

using namespace std;

int main()
{
	/* Initialize the socket */

	WSADATA wsadata;
	WSAStartup(MAKEWORD(2, 2), &wsadata);

	SOCKET socket_client = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);

	struct hostent* host;
	host = gethostbyname("localhost");

	SOCKADDR_IN sockaddr;
	sockaddr.sin_addr.s_addr = *((unsigned long*)host->h_addr);
	sockaddr.sin_family = AF_INET;
	sockaddr.sin_port = htons(8888);

	connect(socket_client, (SOCKADDR*)(&sockaddr), sizeof(sockaddr));

	
	
	/* Read data from server */

	char buf[1000];
	recv(socket_client, buf, 1000, 0);
	cout << "Data received: " << buf << endl;


	/* Closing the socket */
	shutdown(socket_client, SD_SEND);
	closesocket(socket_client);
	WSACleanup();

	cout << "End of client";
	return 0;
}
