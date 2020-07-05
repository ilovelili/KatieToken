// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Katie is ERC721 {
    constructor(uint256 tokenId, string memory tokenURI)
        public
        ERC721("Katie", "KATE")
    {
        super._mint(msg.sender, tokenId);
        super._setTokenURI(tokenId, tokenURI);
    }
}
