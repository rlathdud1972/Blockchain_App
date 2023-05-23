require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/i8tJvr1lLE0eiOnD9JySZ-6zZZWtmaXs',
      accounts: [ '8ebb075882f7f76ca9f12f69cba1b5d2628c9fca63ab89413f1a67040aa45d21' ]
    }
  }
}
