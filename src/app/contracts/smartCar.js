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
		"constant": false,
		"inputs": [
			{
				"name": "b",
				"type": "uint256"
			},
			{
				"name": "d",
				"type": "address"
			}
		],
		"name": "setMapIndex",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
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
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getMapIndex",
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
bin:string = "0x"+"608060405234801561001057600080fd5b506040516020806105b78339810180604052602081101561003057600080fd5b810190808051906020019092919050505060008111151561005057600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060018190555060015460028190555050610507806100b06000396000f3fe608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630749afec1461008857806312065fe0146100b35780631a16faa0146100de5780632de644c214610151578063335978691461017c5780638f8d36d2146101d3578063d4ba91101461020e575b600080fd5b34801561009457600080fd5b5061009d610273565b6040518082815260200191505060405180910390f35b3480156100bf57600080fd5b506100c8610279565b6040518082815260200191505060405180910390f35b3480156100ea57600080fd5b506101376004803603604081101561010157600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102c0565b604051808215151515815260200191505060405180910390f35b34801561015d57600080fd5b50610166610310565b6040518082815260200191505060405180910390f35b34801561018857600080fd5b5061019161031a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101df57600080fd5b5061020c600480360360208110156101f657600080fd5b810190808035906020019092919050505061033f565b005b34801561021a57600080fd5b5061025d6004803603602081101561023157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610492565b6040518082815260200191505060405180910390f35b60015481565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600082600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001905092915050565b6000600254905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081118015610350575060025481105b151561035b57600080fd5b803373ffffffffffffffffffffffffffffffffffffffff1631101561037f5761048f565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600254036002819055507f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd3345336000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b50565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea165627a7a72305820496b2e8cc594417ccccc88933fedca8bb618b5a7960e5be9aefe5c7d79efa81f0029"
  };

