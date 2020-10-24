''''''''''''''Chapter 1

Private Sub Worksheet_Activate()
'MsgBox "Sheet is seleced"
Dim var
Static stat
var = var + 1
stat = stat + 1
MsgBox var
MsgBox stat
End Sub


''''''''''''''Chapter 2

Dim var_mod
Global var_glob
Type Employee
name As String
age As Integer
End Type

Static Sub func()
Dim var
var = var + 1
'MsgBox VarType(var)
var = "string"
'MsgBox VarType(var)
'var = var + 10
'MsgBox IsNumeric(var)
End Sub

Sub func2()
var2 = 10
var = "21/07/2013"
'MsgBox IsDate(var)
'MsgBox IsEmpty(var2)
End Sub

Sub func3()
Dim str As String * 5
str = "12345689"
'MsgBox str
End Sub

Sub func4()
ReDim str(5) As String
str(0) = "Jayanta"
str(1) = "Gowtham"
ReDim Preserve str(6)
str(6) = "shoukat"
'MsgBox str(6)
End Sub

Sub func5()
Dim arr(5)
For i = 0 To 5
'MsgBox 10 + i
Next i
End Sub

Sub func6()
Dim str(5) As String
For i = 0 To 5
str(i) = Chr(65 + i)
Next i
'MsgBox str(5)
End Sub

Sub func7()
Dim arr(2, 2)
For i = 0 To 2
For j = 0 To 2
arr(i, j) = 5
Next j
Next i
'MsgBox arr(1, 2)
End Sub

Sub func8()
ReDim arr(2)
'MsgBox UBound(arr)
ReDim arr(5)
'MsgBox UBound(arr)
End Sub

Sub func9()
Dim emp As Employee
emp.name = "Jayanta"
emp.age = 30
MsgBox emp.name
End Sub

Sub func10()
Const name = "Constant"
MsgBox name
End Sub

'''''''''''''' Chapter 3 

Sub s()
Call s2
End Sub

Sub s2()
MsgBox "I am in func2"
End Sub

Function func()
x = Now
MsgBox x
End Function



Sub sub1()
Call sub2
End Sub

Sub sub2()
MsgBox "I am in func2"
End Sub

Function func()
x = Now
MsgBox x
End Function

Sub sub3()
'Call sub4("some string")
MsgBox twice(3)
End Sub

Sub sub4(arg)
MsgBox arg
End Sub

Function twice(a)
twice = a * 2
End Function

Sub sub5()
'Call sub6(1)
'Call EcuM_SelectShutdownTarget("sleep", "sleepmode0")
a = 2
thrice a
MsgBox a
End Sub

Sub sub6(a As Integer)
MsgBox a
End Sub

Sub EcuM_SelectShutdownTarget(target, Optional mode)
MsgBox target
MsgBox mode
End Sub

Function thrice(ByRef x)
x = x * 3
End Function



''''''''''''' Chapter 5

Sub sub1()
'MsgBox "My age is " & 30
age = Mid("30Jayanta Debnath", 1, 2)
'MsgBox Val(age) - 20
'MsgBox Right("30Jayanta", 7)
'MsgBox UCase("Jayanta")
'MsgBox InStr("Jayanta Debnath", "Debnath")
'MsgBox InStr(1, "Jayanta Debnath", "debnath", vbTextCompare)
'MsgBox Len("Jayanta")
'If Len("30Jayanta") > 7 Then MsgBox Right("30Jayanta", 7)
'MsgBox Format(280000, "##,###")
'MsgBox Format(280000, "Currency")
'MsgBox Format(".7", "0.00")
date1 = Format(Date, "dd-mm-yyyy")
'MsgBox DateAdd("d", -7, date1)
'MsgBox DateDiff("d", date1, "25-07-2013")
MsgBox DatePart("d", Date)
End Sub

Sub sendkeys1()
x = Shell("cmd.exe", 1)
Application.Wait Now + TimeValue("00:00:01")
SendKeys "dir"
SendKeys "{ENTER}"
End Sub

Sub sendkeys2()
AppActivate "Calculator"
SendKeys "1{+}2{ENTER}"
End Sub

Sub msgbox1()
'MsgBox "hello world", vbYesNo
'MsgBox "hello world", vbRetryCancel Or vbCritical, "retry cancel"
x = MsgBox("Hello World", vbYesNo)
s = "You have clicked "
If x = vbYes Then s = s & "Yes"
If x = vbNo Then s = s & "No"
MsgBox s
End Sub



''''''''''''''''''' Chapter 7 & 8

Sub sub1()
x = 2
Do Until x = 1
    x = x + 1
    If x = 100 Then Stop
Loop
End Sub


Sub sub1()
x = 2
Do Until x = 1
    x = x + 1
    If x = 100 Then Stop
Loop
End Sub

Sub sub2()
On Error GoTo err_handler
    AppActivate "Calculator"
    AppActivate "cmd.exe"
    SendKeys 1
    Exit Sub
err_handler:
    MsgBox "ERROR: " & Err.Description, vbCritical
    On Error GoTo 0
    Resume
End Sub

Sub sub3()
Error 7
End Sub






