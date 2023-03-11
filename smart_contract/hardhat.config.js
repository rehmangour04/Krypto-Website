// https://eth-sepolia.g.alchemy.com/v2/nw7iWdI5SIrEBijFvdaFe0YNKx4vFxCw


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/nw7iWdI5SIrEBijFvdaFe0YNKx4vFxCw',
      accounts: ['c328900c00546e83259005eef791f3b7ae82382f3020a78cee2ec4217aee6d5d'],
    },
  },
};