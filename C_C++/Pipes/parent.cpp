#include <iostream>
#include <windows.h> 
#include <unistd.h>

using namespace std;

int main(int argc, char** argv)
{
	cout << "Inside parent" <<endl;

	STARTUPINFO StartInfo;
	PROCESS_INFORMATION ProcInfo; 
	SECURITY_ATTRIBUTES saAttr;
   
	HANDLE stdoutReadHandle;
	HANDLE stdoutWriteHandle;
	
	ZeroMemory( &saAttr, sizeof( saAttr ) );
	saAttr.nLength = sizeof( SECURITY_ATTRIBUTES );
	saAttr.bInheritHandle = TRUE;
	saAttr.lpSecurityDescriptor = NULL;
	
	if( !CreatePipe( &stdoutReadHandle, &stdoutWriteHandle, &saAttr, 4096 ) ) cout << "Create pipe failed" << endl;
	
	if( !SetHandleInformation(stdoutReadHandle, HANDLE_FLAG_INHERIT, 0) ) cout << "Sethandleinfo failed\n";
	
   
    ZeroMemory( &StartInfo, sizeof(StartInfo) );
	StartInfo.cb = sizeof( StartInfo );
	StartInfo.hStdOutput = stdoutWriteHandle;
	StartInfo.hStdError = stdoutWriteHandle;
	StartInfo.hStdInput = GetStdHandle( STD_INPUT_HANDLE );
	StartInfo.dwFlags |= STARTF_USESTDHANDLES;

    ZeroMemory( &ProcInfo, sizeof(ProcInfo) );

	if( !CreateProcess (
				  NULL,
				  "child",
				  NULL,
				  NULL,
				  TRUE,
				  CREATE_NO_WINDOW,
				  NULL,
				  0,
				  &StartInfo,
				  &ProcInfo
				) ) cout << "Create process failed \n";

	CloseHandle( stdoutWriteHandle );

	char readBuf[100];
	DWORD numBytes;
	if( !ReadFile( stdoutReadHandle, readBuf, 5, &numBytes, NULL ) ) cout << "Read file failed \n" ;

	cout << "Read from pipe: " << readBuf << endl;
	
	WaitForSingleObject(ProcInfo.hProcess, INFINITE);
	
	CloseHandle(ProcInfo.hProcess);
    CloseHandle(ProcInfo.hThread);
	
	cout << "End parent" << endl;
				
	return 0;
}
