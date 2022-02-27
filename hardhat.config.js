/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.NODE_API_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },
  },
};
