//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    // event การโอนเหรียญ;
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    // struct เก็บข้อมูลที่ต้องการ
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1; // ทุกครั้งที่มีการเพิ่ม Block จะ Count Transactions ขึ้น 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword)); // push Array เข้า TransferStruct;
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword); // emit event การโอนเหรียญ;
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns(uint256) {
        return transactionCount;
    }

}