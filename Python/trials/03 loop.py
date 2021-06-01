i = 10
while i > 0:
    print(i)
    i -= 2

i = 50
while i > 0:
    print(i)
    i -= 1
    if i == 25:
        break
        
i = 50
while i > 0:
    i -= 1
    if( i % 2 != 0 ):
        continue
    print(i)

# for loop
fruits=["apple","banana","cherry"]
for x in fruits:
    print(x)

# looping through a string
for x in "Abhijeet":
    print(x)

# range
for a in range(10):
    print(a)