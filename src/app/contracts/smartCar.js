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
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_balanceValue",
				"type": "uint256"
			}
		],
		"name": "setBalance",
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
bin:string = "0x"+"608060405234801561001057600080fd5b506040516020806104f78339810180604052602081101561003057600080fd5b810190808051906020019092919050505060008111151561005057600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060018190555060015460028190555050610447806100b06000396000f3fe608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630749afec1461007d57806312065fe0146100a85780632de644c2146100d357806333597869146100fe578063a560cc2914610155578063e30443bc146101b0575b600080fd5b34801561008957600080fd5b50610092610223565b6040518082815260200191505060405180910390f35b3480156100b457600080fd5b506100bd610229565b6040518082815260200191505060405180910390f35b3480156100df57600080fd5b506100e8610270565b6040518082815260200191505060405180910390f35b34801561010a57600080fd5b5061011361027a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561016157600080fd5b506101ae6004803603604081101561017857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061029f565b005b3480156101bc57600080fd5b50610209600480360360408110156101d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506103cb565b604051808215151515815260200191505060405180910390f35b60015481565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000600254905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000821180156102b0575060025482105b15156102bb57600080fd5b813373ffffffffffffffffffffffffffffffffffffffff163110156102df576103c7565b60006102eb82846103cb565b90508015156102fa57506103c7565b82600254036002819055507f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd3345336000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1505b5050565b600081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600190509291505056fea165627a7a72305820ad85cffb0104e5f08c0c764590f4f139f13249fd5d2e52932f9e9cb9746c50d70029"
  };

