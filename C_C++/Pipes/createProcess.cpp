#include <iostream>
#include <windows.h> 

using namespace std;

int main(int argc, char** argv)
{
	cout << "Inside parent" <<endl;
	
   STARTUPINFO StartInfo;
   PROCESS_INFORMATION ProcInfo; 

    ZeroMemory( &StartInfo, sizeof(StartInfo) );
    ZeroMemory( &ProcInfo, sizeof(ProcInfo) );
	
	BOOL ret = CreateProcess (
				  NULL,
				  "calc",
				  NULL,
				  NULL,
				  TRUE,
				  0,
				  NULL,
				  NULL,
				  &StartInfo,
				  &ProcInfo
				);

	cout << ret;
	
	return 0;
}
