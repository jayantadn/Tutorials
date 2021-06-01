#include <iostream>

#include "botan/mac.h"
#include "botan/rng.h"
#include "botan/system_rng.h"
#include "botan/hex.h"

using namespace Botan;

void mac() {
    std::unique_ptr<MessageAuthenticationCode> mac = MessageAuthenticationCode::create("CMAC(AES-128)");

    std::unique_ptr<Botan::RandomNumberGenerator> rng(new System_RNG);
    secure_vector<uint8_t> key = rng->random_vec(mac->minimum_keylength());
    mac->set_key(key);

    // OPL: what is the minimum iv length for CMAC(AES-128) ? how is it working withou providing an iv?
    // const std::vector<uint8_t> iv(12, 15);
    // mac->start(iv);

    std::vector<uint8_t> data = hex_decode("11112222333344445555666677778888");
    mac->update(data);

    secure_vector<uint8_t> output = mac->final();
    std::cout << "Generated CMAC value is: " << hex_encode(output) << std::endl;
}