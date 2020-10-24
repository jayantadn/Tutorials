#define _WIN32_WINNT _WIN32_WINNT_WIN7
#include <windows.h>
#include <stdio.h>

void launch(const char * cmdline_in)
{
    PROCESS_INFORMATION processInfo;
    STARTUPINFOA startupInfo; 
    SECURITY_ATTRIBUTES saAttr; 

    HANDLE stdoutReadHandle = NULL;
    HANDLE stdoutWriteHandle = NULL;

    char cmdline[256];
    char outbuf[32768];
    DWORD bytes_read;
    char tBuf[257];

    DWORD exitcode;

    strcpy_s(cmdline, sizeof(cmdline), cmdline_in);

    memset(&saAttr, 0, sizeof(saAttr));
    saAttr.nLength = sizeof(SECURITY_ATTRIBUTES); 
    saAttr.bInheritHandle = TRUE; 
    saAttr.lpSecurityDescriptor = NULL; 

    // Create a pipe for the child process's STDOUT. 
    if (!CreatePipe(&stdoutReadHandle, &stdoutWriteHandle, &saAttr, 5000))
    {
        printf("CreatePipe: %u\n", GetLastError());
        return;
    }

    // Ensure the read handle to the pipe for STDOUT is not inherited.
    if (!SetHandleInformation(stdoutReadHandle, HANDLE_FLAG_INHERIT, 0))
    {
        printf("SetHandleInformation: %u\n", GetLastError());
        return;
    }

    memset(&startupInfo, 0, sizeof(startupInfo));
    startupInfo.cb = sizeof(startupInfo);
    startupInfo.hStdError = stdoutWriteHandle;
    startupInfo.hStdOutput = stdoutWriteHandle;
    startupInfo.hStdInput = GetStdHandle(STD_INPUT_HANDLE);
    startupInfo.dwFlags |= STARTF_USESTDHANDLES;

    // memset(&processInfo, 0, sizeof(processInfo));  // Not actually necessary

    printf("Starting.\n");

    if (!CreateProcessA(NULL, cmdline, NULL, NULL, TRUE,
        CREATE_NO_WINDOW, NULL, 0, &startupInfo, &processInfo))
    {
        printf("CreateProcessA: %u\n", GetLastError());
        return;
    }

    CloseHandle(stdoutWriteHandle);

    strcpy_s(outbuf, sizeof(outbuf), "");

    for (;;) {
        printf("Just before ReadFile(...)\n");
        if (!ReadFile(stdoutReadHandle, tBuf, 256, &bytes_read, NULL))
        {
            printf("ReadFile: %u\n", GetLastError());
            break;
        }
        printf("Just after ReadFile, read %u byte(s)\n", bytes_read);
        if (bytes_read > 0)
        {
            tBuf[bytes_read] = '\0';
            strcat_s(outbuf, sizeof(outbuf), tBuf);
        }
    }

    printf("Output: %s\n", outbuf);

    if (WaitForSingleObject(processInfo.hProcess, INFINITE) != WAIT_OBJECT_0)
    {
        printf("WaitForSingleObject: %u\n", GetLastError());
        return;
    }

    if (!GetExitCodeProcess(processInfo.hProcess, &exitcode))
    {
        printf("GetExitCodeProcess: %u\n", GetLastError());
        return;
    }

    printf("Exit code: %u\n", exitcode);

    CloseHandle( processInfo.hProcess );
    CloseHandle( processInfo.hThread );

    return;
}

int main(int argc, char** argv)
{
    launch("C:\\windows\\system32\\help.exe");
    return 0;
}