# if condition
if( 20 -lt 20 ) {
    Write-Host "Condition is true"
}
elseif( $true ) {
    Write-Host "elseif path is true"
}

# switch case
switch(2) {
    1 { "This is one"; break }
    2 { "This is two"; break }
}

# negate a condition
if (-Not (Test-Path C:\Code)) {
    write "it doesn't exist!"
} 