require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss hope knife fortune taste'; 
let testAccounts = [
"0x4bd34c5a568d08f942c262791a6c1c0d54f96656022c04dac4f3aa662a7946d5",
"0x3d5cfa8f691bbb9e9a6350310db6fc2b3822a55b60f871ec8e192d3944110dd8",
"0xdabd13d035892fbbe073c915bb5d2c3c129453d767ba5b8e58de4f04a43d25bc",
"0xd30aa81f954af3f95c051d67210d666d66993e4ff64383b6e26be348a93a7638",
"0xa6f435b7ce522fb37ada0361aa0813585ca80e48d3f3cd77e486d4f0846bb1df",
"0xab796ab98f6680c28cec54623525021fc39bb3977e2f03ee9d59c7c29dc39d5b",
"0x327760a8e160bc8f7b5b834ab103fab27fd742289c1f0dc041111da616525daf",
"0x772c3eb9c109f8bfa173a35e238bf038b38c46d57082e5d4232fee7dbe941145",
"0x540b95e8bbc3426c771f57b9b99e98f32d2055214dd29ab356af6bc146f14765",
"0x62707a45edd0a0d05439cdeb10bc971a51a05fa67d41d917a2e06ee57c15ac1a"
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

