const tinysecp = require('tiny-secp256k1');
const coininfo = require('coininfo');
const ecpair = require('ecpair');
const bitcoin = require('bitcoinjs-lib');

const names = Object.keys(coininfo)
const units = Object.values(coininfo).map(coin=>coin.main.unit)
console.assert(names.length === units.length)
for (let i=0; i<names.length; i++) {
    console.log(`${units[i]}\t${names[i]}`)
}
