// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.9;
import "@openzeppelin/contracts/finance/PaymentSplitter.sol";

contract splitFactory {
    struct splits {
        uint256 totalSplits;
        address[] splitsAddress;
    }
    mapping(address => splits) public splitsDatabase;

    event createdSplit(address indexed creator, address indexed split);

    function createSplit(address[] memory payees, uint256[] memory shares)
        public
        returns (address)
    {
        PaymentSplitter split = new PaymentSplitter(payees, shares);
        splitsDatabase[msg.sender].totalSplits++;
        splitsDatabase[msg.sender].splitsAddress.push(address(split));

        emit createdSplit(msg.sender, address(split));
        return address(split);
    }
}

contract Split is PaymentSplitter {
    constructor(address[] memory payees, uint256[] memory shares)
        PaymentSplitter(payees, shares)
    {}
}
