// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract GridCoin is ERC20 {
    using SafeMath for uint256;

    struct Transaction{
        address from;
        address to;
        uint256 timeOfTransaction;
        uint256 amount;
        string status;
    }

    struct TokenHolder {
        uint256 balance;
        Transaction[] transactions;
    }
    uint public constant INITIAL_SUPPLY = 100000 * (10**18);

    mapping(address => TokenHolder) public tokenHolders;

    constructor() ERC20("GridCoin", "GDC") {
        _mint(msg.sender, INITIAL_SUPPLY);
        tokenHolders[msg.sender].balance = INITIAL_SUPPLY;
    }

    function balanceOf(address account) public view override returns (uint256) {
        return tokenHolders[account].balance;
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(amount < balanceOf(msg.sender), "Insufficient balance");
        tokenHolders[msg.sender].balance = tokenHolders[msg.sender].balance.sub(amount);
        tokenHolders[recipient].balance = tokenHolders[recipient].balance.add(amount);
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function transferFrom(address sender, address reciever, uint256 amount) public override returns (bool){
        Transaction memory transaction = Transaction(sender, reciever, block.timestamp, amount, "success");
        require(amount < balanceOf(sender),"Insufficient balance");
        tokenHolders[sender].balance = tokenHolders[sender].balance.sub(amount);
        tokenHolders[reciever].balance = tokenHolders[reciever].balance.add(amount);
        tokenHolders[sender].transactions.push(transaction);
        tokenHolders[reciever].transactions.push(transaction);
        emit Transfer(sender,reciever, amount);
        
        return true;
    }

    function user(address _user) external view returns (TokenHolder memory){
        return tokenHolders[_user];
    }
}

