import subprocess
from consolemenu import *
from consolemenu.items import *
import random

def pause() :
    input("Press Enter to exit ...")
    quit()

def monobit() :
    nzero = 0;
    none = 0;

    print("Computing...")
    for x in range(random.randrange(10,100)) :
        out = subprocess.check_output(['botan', 'rng', str(random.randrange(1,10))])
        for byte in out.decode('utf-8') :
            if byte=='\r' or byte=='\n' :
                continue
            else :
                b = bin(int(byte, 16))
                nzero += b.count('0') - 1 # removing the prefix 0 as in 0b
            none += b.count('1')

    print("number of zeros: ", nzero)
    print("number of ones: ", none)
    pause()

if __name__ == '__main__':
    menu = ConsoleMenu("Botan Test")
    item = FunctionItem("Monobit test for RNG", monobit)
    menu.append_item(item)
    menu.show()
