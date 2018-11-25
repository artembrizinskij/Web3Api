module.exports = {
abi:[
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
		"constant": true,
		"inputs": [],
		"name": "carValueUsd",
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
		"constant": false,
		"inputs": [
			{
				"name": "_depositAmountUsd",
				"type": "uint256"
			},
			{
				"name": "_depositAmountWei",
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
				"name": "_carValueUsd",
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
bin:string = "0x"+"608060405234801561001057600080fd5b506040516020806104a68339810180604052602081101561003057600080fd5b810190808051906020019092919050505060008111151561005057600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600181905550600154600281905550506103f6806100b06000396000f3fe60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632de644c214610072578063335978691461009d5780638f175f18146100f457806399de98461461011f578063f8b2cb4f14610184575b600080fd5b34801561007e57600080fd5b506100876101e9565b6040518082815260200191505060405180910390f35b3480156100a957600080fd5b506100b26101f3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010057600080fd5b50610109610218565b6040518082815260200191505060405180910390f35b34801561012b57600080fd5b506101826004803603606081101561014257600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061021e565b005b34801561019057600080fd5b506101d3600480360360208110156101a757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610381565b6040518082815260200191505060405180910390f35b6000600254905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b60008311801561022f575060025483105b151561023a57600080fd5b813373ffffffffffffffffffffffffffffffffffffffff1631101561025e5761037c565b82600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550826002600082825403925050819055507f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd3345336000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b505050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea165627a7a72305820c1cd6615feeff5d9710c611d7c40eff8de973fd6ebf02738bf4f2bc2d7a882cd0029"
  };

