@echo off

set dest=C:\Backup
set temp=C:\temp

rem check if the passed parameter is a valid file
echo Checking if parameter is valid 
if "%1" == "" goto error
if not exist %1 goto error
echo Ok

rem get the timestamp
set tim=%time%
if %tim:~0,2% lss 10 set tim=%tim: =0%
for /f "tokens=1-6 delims=-:." %%g in ('echo %date%:%tim%') do set timestamp=%%i%%h%%g_%%j%%k%%l

rem extract the filename from the path
for /d %%g in (%1) do set filename=%%~ng%%~xg

rem quick archive
echo Quick archive 
if exist %1.7z goto error
7z a -t7z -mx0 %1.7z %1 > %temp%\7z.log
if not errorlevel 0 goto error
echo Ok. === YOU CAN CONTINUE YOUR WORK NOW ===

rem move archive to temp folder
echo Move archive to temp folder 
if exist %temp%\%filename%.7z goto error
move %1.7z %temp% > nul
if not errorlevel 0 goto error
echo Ok

rem Deflate the archive
echo Deflate the archive
if exist %temp%\%filename% goto error
7z x -o%temp% %temp%\%filename%.7z > %temp%\7z.log
if not errorlevel 0 goto error
del %temp%\%filename%.7z > nul
echo Ok

rem Recompress the archive
echo Recompress the archive
7z a -t7z -mx9 %temp%\%timestamp%_%filename%.7z %temp%\%filename% > %temp%\7z.log
if not errorlevel 0 goto error
rd /s /q %temp%\%filename%
echo Ok

rem Move from temp to backup folder
echo Move from temp to backup folder
if exist %dest%\%timestamp%_%filename%.7z goto error
move %temp%\%timestamp%_%filename%.7z %dest% > nul
if not errorlevel 0 goto error
echo Ok

:success
echo Backup successful
goto end

:error
echo Backup FAILED
pause

:end
