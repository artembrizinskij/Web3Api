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
				"name": "value",
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
				"name": "value",
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
bin:string = "0x"+"608060405234801561001057600080fd5b506040516020806104398339810180604052602081101561003057600080fd5b810190808051906020019092919050505060008111151561005057600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060018190555060015460028190555050610389806100b06000396000f3fe60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630749afec1461007257806312065fe01461009d5780632de644c2146100c857806333597869146100f35780638f8d36d21461014a575b600080fd5b34801561007e57600080fd5b50610087610185565b6040518082815260200191505060405180910390f35b3480156100a957600080fd5b506100b261018b565b6040518082815260200191505060405180910390f35b3480156100d457600080fd5b506100dd6101d2565b6040518082815260200191505060405180910390f35b3480156100ff57600080fd5b506101086101dc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015657600080fd5b506101836004803603602081101561016d57600080fd5b8101908080359060200190929190505050610201565b005b60015481565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000600254905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081118015610212575060025481105b151561021d57600080fd5b803373ffffffffffffffffffffffffffffffffffffffff163110156102415761035a565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555080600254036002819055507f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd3345336000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b5056fea165627a7a72305820139d0605044a76589cab20dd6cc3ffb31673211b93304cecf21239ed1f017ee50029"
  };

