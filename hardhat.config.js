/**
* @type import('hardhat/config').HardhatUserConfig
*/
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
require("hardhat-deploy");
const { PRIVATE_KEY, MATIC_API_KEY } = process.env;
module.exports = {
  defaultNetwork: "PolygonMumbai",
  networks: {
    hardhat: {
    },
     PolygonMumbai: {
      url: `https://rpc-mumbai.maticvigil.com/v1/${MATIC_API_KEY}`,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}