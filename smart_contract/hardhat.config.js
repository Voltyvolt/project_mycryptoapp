require('@nomiclabs/hardhat-waffle');
let secret = require("./secret")

module.exports = {
  solidity: '0.8.0',
  network:{
     bsctest: {
        url: 'https://speedy-nodes-nyc.moralis.io/7c9053dc95c83b8068dbbe73/bsc/testnet',
        accounts: [ '0x3c1756d205a85a6e3d5945d582be6780d0070e6712cdc15379dba2815770dd60' ]
      }
  }
}