/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-ethers')
const API_URL = "https://speedy-nodes-nyc.moralis.io/7c9053dc95c83b8068dbbe73/bsc/testnet";
const PRIVATE_KEY = "3c1756d205a85a6e3d5945d582be6780d0070e6712cdc15379dba2815770dd60"
const PUBLIC_KEY = "0xD38ad12aa04246738A4805a003276982c58D4c18";

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "bsctestnet",
  networks: {
    hardhat:{},
    bsctestnet:{
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
