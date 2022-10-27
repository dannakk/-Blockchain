//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address payable public seller;
    uint public endTime;
    uint public largestBid;
    address public largestBidderAccount;
    mapping(address => uint) public bids;

    constructor() public ERC721("MyNFT", "NFT") {
        seller = payable(msg.sender);
    }

    function mintNFT(uint startingBid, string memory tokenURI)
        external
        returns (uint256)
    {
        _tokenIds.increment();
        largestBid = startingBid;

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        endTime = block.timestamp + 2 minutes;

        return newItemId;
    }

    function makeBid() external payable {
        require(block.timestamp < endTime);
        require(msg.value > largestBid);

        if (largestBidderAccount != address(0)) {
            bids[largestBidderAccount] += largestBid;
        }

        largestBid = msg.value;
        largestBidderAccount = msg.sender;

    }

    function endAuction() external {
        require(block.timestamp >= endTime);

        if (largestBidderAccount != address(0)) {
            transferFrom(seller, largestBidderAccount, _tokenIds._value);
            payable(seller).transfer(largestBid); 
        }

    }

    
}
