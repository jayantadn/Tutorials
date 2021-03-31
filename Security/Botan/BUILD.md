Botan version built is: botan-2.17.3

add the following to PATH variable :
    C:\toolbase\mingw\comp_6.3.0_w64_testversion1f\bin --> gcc for x86_64
    C:\toolbase\mingw\4.8.1\msys\1.0\bin --> required for make
    
python configure.py --cc=gcc --os=mingw --prefix="X:\Tutorials\Security\Botan\botan-bin"
make

Note: the prefix provider up did not work actually. binaries are generated in the source folder itself.