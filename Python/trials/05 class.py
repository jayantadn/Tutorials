class MyClass:
    def __init__(this, x, y):	# constructor
        this.X = x	# data members are defined on the fly
        this.Y = y
        
    def add(this):
        return this.X + this.Y
    
obj = MyClass(10, 20)
print( obj.add() )