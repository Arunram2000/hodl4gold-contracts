require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const secret = require("./secrets.json");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    bsctest: {
      url: secret.url,
      accounts: [
        "55c1b5b4b56f95b64cbda819dc7a1b3bfbc24c142d9d6b50954113649c95572a",
      ],
    },
  },
  etherscan: {
    apiKey: secret.bscscan,
  },
};
