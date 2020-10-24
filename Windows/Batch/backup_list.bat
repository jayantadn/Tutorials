@echo off

set dest=X:\Copy\Games\Backup
set temp=C:\temp
set filelist=X:\Copy\Games\Backup\filelist.txt

rem Check if the filelist and destination is valid
echo Check if the filelist and destination is valid
if not exist %filelist% goto error
if not exist %dest% goto error
echo Ok

rem get the timestamp
set tim=%time%
if %tim:~0,2% lss 10 set tim=%tim: =0%
for /f "tokens=1-6 delims=-:." %%g in ('echo %date%:%tim%') do set timestamp=%%i%%h%%g_%%j%%k%%l

rem create temp folder
echo Create temp folder
md %temp%\%timestamp%_Backup
if not errorlevel 0 goto error
echo Ok

rem read the filelist
for /f "tokens=*" %%g in ('type %filelist%') do (
echo Compressing %%g
"C:\Program Files\7-Zip\7z.exe" a -t7z -mx9 %temp%\%timestamp%_Backup\%%~ng%%~xg.7z %%g >> %temp%\%timestamp%_Backup\7z.log
if not errorlevel 0 (echo Failed) else (echo Ok)
)

rem Move from temp to backup location
echo Move from temp to backup location
md %dest%\%timestamp%_Backup
if not errorlevel 0 goto error
xcopy %temp%\%timestamp%_Backup\* %dest%\%timestamp%_Backup\*
if not errorlevel 0 goto error
rd /s /q %temp%\%timestamp%_Backup
echo Ok

:success
echo === BACKUP SUCCESSFUL ===
goto end

:error
echo === BACKUP FAILED ===
pause

:end
