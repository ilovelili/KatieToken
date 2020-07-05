require("dotenv").config();
const HDWalletProvdier = require("@truffle/hdwallet-provider");

module.exports = {
	networks: {
		development: {
			host: "localhost",
			port: 8545,
			network_id: "*",
		},
		ropsten: {
			provider: () => {
				return new HDWalletProvdier(process.env.MNEMONIC, process.env.INFURA_URI);
			},
			network_id: 3,
		},
	},
	compilers: {
		solc: {
			version: "^0.6.0",
		},
	},
};
