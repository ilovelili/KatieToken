const Katie = artifacts.require("Katie");

module.exports = async (deployer, network, accounts) => {
	const tokenId = 1;
	const tokenURI = "https://ipfs.infura.io/ipfs/Qmci1VG2ejkptFZiH2FdQMoFe6ybpBYgxPLtRNMy5Wi4pM";
	await deployer.deploy(Katie, tokenId, tokenURI);
};
