/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    swisstronik_testnet: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["74c09efedc9aca70f42ba31bee9daae44a02273a37109ca2d33fac7887d0dcf0"],
      chainId: 1291,
    },
  },
};
