REM @echo off
REM echo Hello World
set /a 5+5
echo | pause
echo %0%
date /t && time /t
start calc
call 02.bat

start /min notepad.exe
pause
taskkill /im notepad.exe

ver
type work\tree.txt

echo param1=%1% 
echo param2=%2%
shift /2
echo param1=%1% 
echo param2=%2%

cd
echo errorlevel = %errorlevel%
cd "dummy"
echo errorlevel = %errorlevel%

echo current directory is %cd%
echo computer name is %computername%
echo date and time is %date%; %time%
echo random number is %random%
echo user is %userdomain%\%username%

goto mylabel
echo "before label"
:mylabel
set var="some variable"
echo %var%

for /l %%n in (1,1,10) do echo %%n
for /d %%v in (d:\*.*) do echo %%v
for /r D:\My_Documents %%v in (*.doc) do echo %%v
for /f "tokens=*" %%v in ('type "work\tree.txt"') do echo %%v

for /f "tokens=* skip=2" %%v in ('type "work\tree.txt"') do echo %%v
for /f "tokens=2 delims=," %%v in ("a,b,c,d") do @echo %%v
for /f "tokens=2-4 delims=," %%v in ("a,b,c,d") do @echo %%v %%w %%x
for /f "tokens=2* delims=," %%v in ("a,b,c,d") do @echo %%v %%w

if exist "02.bat" (echo Found) else echo Not Found
at
if %errorlevel% == 1 (echo Commmand unsuccessful) else echo command successful

if exist Output (
	echo Output folder found. No need to run START_STB.bat
) else (
	echo Output folder no found. Running START_STB.bat
	cd ITF\STB
	START_STB.bat
)

echo type Y/N
set /p var=
echo you have entered %var%
if %var% == Y (echo access granted) else (echo access failed)
if not %var% == Y echo access failed

