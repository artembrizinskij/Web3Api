module.exports = {
abi:[
	{
		"constant": true,
		"inputs": [],
		"name": "carValue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getResidualValue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "carSigner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_depositAmount",
				"type": "uint256"
			},
			{
				"name": "_account",
				"type": "address"
			}
		],
		"name": "buyCarShares",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_account",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_carValue",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Sent",
		"type": "event"
	}
],
bin:string = "0x"+"608060405234801561001057600080fd5b5060405160208061049b8339810180604052602081101561003057600080fd5b810190808051906020019092919050505060008111151561005057600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600181905550600154600281905550506103eb806100b06000396000f3fe60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630749afec146100725780632de644c21461009d57806333597869146100c8578063a560cc291461011f578063f8b2cb4f1461017a575b600080fd5b34801561007e57600080fd5b506100876101df565b6040518082815260200191505060405180910390f35b3480156100a957600080fd5b506100b26101e5565b6040518082815260200191505060405180910390f35b3480156100d457600080fd5b506100dd6101ef565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012b57600080fd5b506101786004803603604081101561014257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610214565b005b34801561018657600080fd5b506101c96004803603602081101561019d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610376565b6040518082815260200191505060405180910390f35b60015481565b6000600254905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600082118015610225575060025482105b151561023057600080fd5b813373ffffffffffffffffffffffffffffffffffffffff1631101561025457610372565b81600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600082825403925050819055507f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd3345336000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b5050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea165627a7a72305820e8a448abfa352e9adbb4304ab88e1316ab5adc3a6a331e390eacfde7bbe60ec10029"
  };

