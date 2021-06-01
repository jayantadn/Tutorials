#include <iostream>

#include "botan/rng.h"
#include "botan/system_rng.h"
#include "botan/hex.h"

#include "botan/rsa.h"

using namespace Botan;

void sig() 
{
    std::unique_ptr<Botan::RandomNumberGenerator> rng(new System_RNG);
    RSA_PrivateKey key(*rng, 3072);
}
