
pragma solidity ^0.5.0;

contract HereYouGoDonkeyCar {
  
  address public carSigner;
  uint public carValueUsd;
  uint balanceToDistribute;
  
  mapping (address => uint) balances;

  event Transfer(address indexed _from, address indexed _to, uint256 _value);

  constructor(uint _carValueUsd) public {
    require(_carValueUsd > 0);
    carSigner = msg.sender;
    carValueUsd = _carValueUsd;
    balanceToDistribute = carValueUsd;
  }

  function getResidualValue() view public returns (uint){
      return balanceToDistribute;
  }
    
  function getBalance(address _account) view public returns(uint){
      return balances[_account];
  }

  function buyCarShares(uint _depositAmountUsd, uint _depositAmountWei, address _account) public {
    require(_depositAmountUsd > 0 && _depositAmountUsd < balanceToDistribute);
    if (msg.sender.balance < _depositAmountWei) return;
    balances[_account] += _depositAmountUsd;
    balanceToDistribute -= _depositAmountUsd;
    emit Transfer(msg.sender, carSigner, _depositAmountWei);
  }

}