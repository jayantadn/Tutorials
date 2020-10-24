# printing to console
"Hi There"
Write-Host -ForegroundColor Green "Some flexibility here"

# variables
$var = 10
$var
$var | Get-Member # This lists all operations for $var

# special variables
$? 		        # return status of last command
$LASTEXITCODE   # return value of last command
$ARGS
$HOME
$PID
$env:TEMP
$env:Path

# date functions
Get-Date
(Get-Date).AddDays(1)
Get-Date -DisplayHint Time

# arithmetic operations
$sum = 10+20
$sum += 5
$sum++
$sum

# comparison operators
10 -eq 10
10 -ne 20 -and 5 -ne 5


# backticks
"First Line `nSecond Line"

# split code lines using backtick
10 -ne 20 -and ` 
    5 -ne 5
    
# get current working directory
$PSScriptRoot

# prompt user for input
$User = Read-Host -Prompt 'Input the user name'