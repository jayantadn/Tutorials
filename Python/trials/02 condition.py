
# show the floor value
print(5 // 2)

# some operators
x = 10;
x += 1; # no x++
print(x)

# boolean
y = False
print(y)

if(True) :
    print("some true value")

# shorthand if
if x > 10: print("x is greater than 10")

# shorthand if-else
print("x is greater than 10") if x > 10 else print("x is actually very small")

# combining conditions
if y == True and x > 10:
    print("both conditions are satisfied")
else:
    print("at least one condition is not satisfied")

# not operator
if not os.path.exists( CONFIGFILE ):
	print( "ERROR: config file does not exist" )