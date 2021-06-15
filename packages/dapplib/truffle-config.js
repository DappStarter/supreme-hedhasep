require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note pave prosper half argue sun theory'; 
let testAccounts = [
"0x48ab1ec1dc5a4435d7264b051bf86b6c4df9b1818fe62457ce6812ab563b7c82",
"0xe7c7048ab1b885cd750b0582e2441bf0053bd0466c9a83e4272fe93c687694e1",
"0x415e03a90391b331059fdbd7eedf069c82740be0845b1ab2964045468386e379",
"0xa4fa849efb1f4da8ab6497d71c21522ae46742a6b37fc4685a9d2670083e4cb7",
"0x74644b21f7525379d630e3a73fba0df81671afa8ad2eeae06745a359e037bab4",
"0x33f2868733b9487f5c271827a495d35ef9285d5bdd17b2830ad798d1cadf3f19",
"0x27dcf370b06ce02d087c26abab29dc06ef3fd7e9ae7c284a9db8761b4d90eaae",
"0xdcd20fb7b1fab0a8caf9eab63afb7edf0123ad8448b284c0f186b6d10a76abaa",
"0x65223ad5586e13f0359f154baa0d6c8a5ef25fe4e5ac918dbad9e41ba8f2b69f",
"0xfe596caaf73a09f5a733a5d8ec300101b449ea4bceea45bda6cd84a7d8186ad6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

