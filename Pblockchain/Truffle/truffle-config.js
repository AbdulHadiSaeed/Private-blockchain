/*module.exports = {
rpc: {
host:"localhost",
port:8543
},
networks: {
development: {
host: "localhost", //our network is running on localhost
port: 8543, // port where your blockchain is running
network_id: "*",
from: "0x9c463303e6cc2a9a515765ad25e2670ae3a46a7b", // use the account-id generated during the setup process
gas: 2000000
}
}
};
*/

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8543,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.4.25"
    }
  }
};
