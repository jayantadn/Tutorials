#include <stdio.h>
#include "botan/rng.h"
#include "botan/system_rng.h"

int main() {
    std::unique_ptr<Botan::RandomNumberGenerator> rng;
    
    rng.reset(new Botan::System_RNG);

    uint8_t buf[4];
    rng->randomize(buf, 4);

    printf("Random number is: ");
    for(auto i=0; i<4; i++) {
        printf("%02x ", buf[i]);
    }
    printf("\n");

    return 0;
}