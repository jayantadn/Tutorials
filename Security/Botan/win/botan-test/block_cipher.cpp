#include <iostream>
#include <algorithm>

#include <botan/hex.h>
#include <botan/block_cipher.h>
#include <botan/cipher_mode.h>
#include "botan/rng.h"
#include "botan/system_rng.h"

#include "menu.hpp"

using namespace Botan;

void aes_ecb() {
    std::unique_ptr<Botan::BlockCipher> cipher = Botan::BlockCipher::create("AES-128");
    cipher->set_key(Botan::hex_decode("5A7234753778214125432A462D4A614E"));

    std::cout << "AES algorithm restricts data to be minimum of 16 bytes long" << std::endl;
    std::cout << "Enter a hex to encode: ";
    std::string str;
    std::cin >> str; // e.g. 111122223333444455556666777788889999
    std::vector<uint8_t> in = Botan::hex_decode(str);
    cipher->encrypt(in);

    std::cout << "Encrypted value is: " << Botan::hex_encode(in) << std::endl;
}

void aes_cbc() {
    std::unique_ptr<Cipher_Mode> provider = Botan::Cipher_Mode::create("AES-128/CBC/PKCS7", ENCRYPTION);
    provider->set_key(Botan::hex_decode("5A7234753778214125432A462D4A614E"));

    std::unique_ptr<Botan::RandomNumberGenerator> rng(new Botan::System_RNG);
    secure_vector<uint8_t> iv = rng->random_vec(provider->default_nonce_length());
    provider->start(iv);

    secure_vector<uint8_t> data(provider->update_granularity(), 5);
    provider->update(data);
    std::cout << "Encrypted first block is: " << hex_encode(data) << std::endl;

    secure_vector<uint8_t> output;
    provider->finish(output);

    std::cout << "Encrypted final value is: " << hex_encode(output) << std::endl;
}

void block_cipher() {
    Menu menu;
    MenuItem item { "AES/ECB", aes_ecb };
    menu.addItem( item );
    item.str = "AES/CBC";
    item.func = aes_cbc;
    menu.addItem(item);
    menu.display();
}