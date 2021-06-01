#include <stdio.h>

#include "menu.hpp"
#include "rng.hpp"
#include "block_cipher.hpp"
#include "mac.hpp"
#include "sig.hpp"

int main() {
    Menu menu;

    MenuItem itemRng { "Random number generator", rng };
    menu.addItem(itemRng);

    MenuItem itemBlk { "Block Cipher algorithms", block_cipher };
    menu.addItem(itemBlk);

    MenuItem itemMac { "MessageAuthenticationCode", mac };
    menu.addItem(itemMac);

    MenuItem itemSig { "Digital Signature", sig };
    menu.addItem(itemSig);    

    menu.display();

    return 0;
}
