
pragma solidity ^0.5.0;

contract HereYouGoDonkeyCar {
  
  address public carSigner;
  uint public carValue;
  //address[] public depositors;
  uint public balanceToDistribute;
  mapping (address => uint) public balances;
  
  event Sent(address from, address to, uint amount);
  event LogDepositors(address depositor, uint amount);

  constructor(uint _carValue) public {
    require(_carValue > 0);
    carSigner = msg.sender;
    carValue = _carValue;
    balanceToDistribute = carValue;
  }

  function getResidualValue() view public returns (uint value){
      return balanceToDistribute;
  }

  function getBalance() view public returns(uint value){
      return balances[msg.sender];
  }

  function buyCarShares(uint _depositAmount) public {
    require(_depositAmount > 0 && _depositAmount < balanceToDistribute);
    if (balances[msg.sender] < _depositAmount) return;
    balances[msg.sender] -= _depositAmount;
    balances[carSigner] += _depositAmount;
    balanceToDistribute -= _depositAmount;
    emit Sent(msg.sender, carSigner, _depositAmount);
    emit LogDepositors(msg.sender, _depositAmount);
  }
}