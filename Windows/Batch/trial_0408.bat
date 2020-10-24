@echo off
REM echo.
REM echo.

REM echo Hello World

REM echo %0%
rem echo %1%

REM echo %date%

rem call 01.bat
rem start 01.bat

REM ver

rem type 01.bat

REM echo param1=%1%
REM echo param2=%2%
REM echo param3=%3%
REM shift /2
REM echo param1=%1%
REM echo param2=%2%
REM echo param3=%3%

REM echo errorlevel=%errorlevel%
REM cd "something"
REM echo errorlevel=%errorlevel%

REM goto mylabel
REM echo Before label
REM :mylabel
REM echo After label

rem for /l %%n in (0,2,9) do echo %%n

rem for /d %%v in (d:\*.*) do echo %%v

rem for /r d:\ %%v in (*.*) do echo %%v

rem for /f "tokens=1,2 delims='SELECTED'" %%v in ('type "C:\Users\jyd1kor\AppData\Roaming\DebugAssist\.metadata\.plugins\org.eclipse.debug.core\.launches\Bosch Debug Launcher_0.launch"') do echo %%v : %%w

REM setlocal enabledelayedexpansion
REM for /f "tokens=2,3 delims= " %%x in ('type "C:\Users\jyd1kor\AppData\Roaming\DebugAssist\.metadata\.plugins\org.eclipse.debug.core\.launches\Bosch Debug Launcher_0.launch"') do (
REM set str=%%x
REM set key=!str:~5,8!
REM set str=%%y
REM set value=!str:~7,5!
REM if !key! == SELECTED echo !value!
REM )

REM for /f "tokens=2,3 delims= " %%x in ('type "C:\Users\jyd1kor\AppData\Roaming\DebugAssist\.metadata\.plugins\org.eclipse.debug.core\.launches\Bosch Debug Launcher_0.launch"') do (
REM echo %%x
REM )

rem if exist %1% (echo Found) else (echo Not Found)

REM cd "C:\Users\jyd1kor\Documentss"
REM if errorlevel 1 (echo Command Failed) else (echo Command Success)

REM echo type Y/N
REM set /p var=
REM echo You have entered %var%

pause