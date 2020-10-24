# func
def func(a = 10): # default parameter value
    print("We are inside func")
    print("param is", a)
    return a * 2
    
func()		# can be called without params because default value is provided
func(11)
print( "return value is", func(20) )

# lambda - anonymous function
add = lambda x, y: x + y
print(add(1, 2))