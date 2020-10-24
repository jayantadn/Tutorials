@echo off

set dest="C:\Backup"

rem extract the filename from the path
for /d %%g in (%1) do set file=%%~ng

rem get the timestamp and create folder name
set curtime=%date%:%time%
for /f "tokens=1-6 delims=-:." %%g in ('echo %curtime%') do set tmpdest=c:\temp\%%i%%h%%g_%%j%%k%%l_%file%

rem create a folder in temp location
md %tmpdest%

rem copy the file to a temp location
xcopy /q /s /e %1 %tmpdest%
if not errorlevel 0 goto error
echo Copied to temp location.

rem compress
start /wait /d "c:\temp" 7z a -t7z -mx9 %tmpdest%.7z %tmpdest%

rem delete the temp folder
rd /s /q %tmpdest%

rem move the destination
move %tmpdest%.7z %dest%

:success
echo Backup successful
goto end

:error
echo Backup Failed
pause

:end
