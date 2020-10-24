# basic function
function Hello {
    "Hello World"
}

# function with parameters
function Hello2 {
    Param( $a, $b )

    "a = $a"
    "b = $b"
}

# function returning a value
function Hello3 {
    return 25
}

Hello
Hello2 10 20
Hello2 -a 5 -b 6
Hello3