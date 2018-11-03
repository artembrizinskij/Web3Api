module.exports = {
abi:[
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "owners",
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
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "balances",
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
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "carShares",
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
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "purchaseShare",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "licensePlate",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "balanceToDistribute",
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
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "ownersBalance",
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
                "name": "_owners",
                "type": "address[]"
            }
        ],
        "name": "setOwners",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_licensePlate",
                "type": "bytes32"
            },
            {
                "name": "_carValue",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
],
bin:string = "0x"+"60806040526008805460ff1916905534801561001a57600080fd5b506040516040806105388339810160405280516020909101516000811161004057600080fd5b60008054600160a060020a03191633178155600191909155600291909155308152600660205260409020606490556104bb8061007d6000396000f3006080604052600436106100a35763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663025e7c2781146100a85780630749afec146100dc57806327e235e31461010357806333597869146101245780633dcdcc73146101395780634cf330101461015a5780637c7077a6146101745780638001d45514610189578063a4fcc57a1461019e578063fa4d3698146101bf575b600080fd5b3480156100b457600080fd5b506100c0600435610214565b60408051600160a060020a039092168252519081900360200190f35b3480156100e857600080fd5b506100f161023c565b60408051918252519081900360200190f35b34801561010f57600080fd5b506100f1600160a060020a0360043516610242565b34801561013057600080fd5b506100c0610254565b34801561014557600080fd5b506100f1600160a060020a0360043516610263565b34801561016657600080fd5b50610172600435610275565b005b34801561018057600080fd5b506100f16102d8565b34801561019557600080fd5b506100f16102de565b3480156101aa57600080fd5b506100f1600160a060020a03600435166102e4565b3480156101cb57600080fd5b5060408051602060048035808201358381028086018501909652808552610172953695939460249493850192918291850190849080828437509497506102f69650505050505050565b600380548290811061022257fe5b600091825260209091200154600160a060020a0316905081565b60015481565b60076020526000908152604090205481565b600054600160a060020a031681565b60066020526000908152604090205481565b3360009081526007602052604090205481111561029157600080fd5b6001548111156102a057600080fd5b60018054829003905533600090815260076020526040808220805484900390558154600160a060020a03168252902080549091019055565b60025481565b60055481565b60046020526000908152604090205481565b600080548190600160a060020a0316331461031057600080fd5b6000835111801561032357506005835111155b151561032e57600080fd5b6003541561033b57600080fd5b825161034e9060039060208601906103e9565b506003543060009081526006602052604090205481151561036b57fe5b0491505b60035460ff821610156103d757816006600060038460ff1681548110151561039357fe5b6000918252602080832090910154600160a060020a03168352828101939093526040918201812093909355308352600690915290208054839003905560010161036f565b50506008805460ff1916600117905550565b82805482825590600052602060002090810192821561044b579160200282015b8281111561044b578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610409565b5061045792915061045b565b5090565b61048c91905b8082111561045757805473ffffffffffffffffffffffffffffffffffffffff19168155600101610461565b905600a165627a7a723058203844232906a546a12e621a1b28c58f11ad8a4ca4e862136af7855eb0890f767c0029"
  };

