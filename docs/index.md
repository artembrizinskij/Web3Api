## **Instructions for running on UBUNTU**

### 1. Run geth console with RPC api on the server.
>*For example, using docker container:*
  **docker run -it -p 8545:8545 -p 30303:30303 ethereum/client-go --dev 
    --rpc --rpcaddr "0.0.0.0" --rpcapi  "admin, debug, miner, ssh, txpool, personal, eth, net, web3" console**
    
   
`    
If geth run on other server change localhost into 
`
 [gethConfig](https://github.com/inter074/Web3Api/blob/master/config/gethConfig.js)



### 2. Clone web3api from github.
`git clone https://github.com/inter074/Web3Api`


### 3. Go to the folder with this app 
  >(sudo or sudo user)
  >- npm install
  
  >Go to `cd src/`
  Run `node server.js`
  
  *If all goes well, the console displays a message* `Up on port:9000`
  
  
  
  
  # Methods description 
  
  `/string/fromHex` *Get string value from hex*
  >The expected parameters: 
>- str
  
  `/string/toHex` *Get hex value from string*
  >The expected parameters: 
>- str
  
  `/decimal/fromHex` *Get decimal value from hex*
  >The expected parameters: 
>- num
  
  `/decimal/toHex` *Get hex value from decimal*
  >The expected parameters: 
>- num 
  
  `/getBalance` *Return wei value of balance*
  >The expected parameters: 
>- account (*address*)
  
  `/getBalanceInEther` *Return etherereum value of balance*
  >The expected parameters: 
>- account (*address*)
  
  `/getAccounts` *Returtn all accounts for the current session in* `geth`  
  
  `/account/signin` *Authorization* 
  >The expected parameters: 
>- account (*address*)
>- pass
  
  
  `/account/create` *Create new  account*   
  >The expected parameters: 
>- pass

  `/ether/send` *Transfer amount to another account*
>The expected parameters: 
>- from (*address*)
>- to (*address*)
>- value (*in wei*)
  
  `/transactions/receipt` *Getting the result of a transaction*
>The expected parameters: 
>- hash (*hash of transaction*)

 `/contract/smartcar/create` *Create and send a transaction to deploy Smart car contract on the ethereum blockchain*
>The expected parameters: 
>- licenseplate
>- carvalue (*car cost*)
>- account (*wallet address from which the amount will be debited*)
>- pass (*account password*)

  `/contract/smartcar/function/setOwners` *Add owners*
>The expected parameters: 
>- address (*contract address*)
>- addresses (*addresses of the owners*)
>- account (*wallet address from which the amount will be debited*)
>- pass 

  `/contract/smartcar/function/carValue` *Get car cost*
>The expected parameters: 
>- address (*contract address*)

  `/contract/smartcar/function/carSigner` *Get account address who deploy contract* 
>The expected parameters: 
>- address (*contract address*)
  
  `/contract/smartcar/function/licensePlate` 
>The expected parameters: 
>- address (*contract address*)
  
  `/contract/smartcar/function/owners` *Get all car owners*
>The expected parameters: 
>- address (*contract address*)
  
  `/contract/smartcar/function/ownersBalance`
>The expected parameters: 
>- address (*contract address*)
  
  `/contract/smartcar/function/carShares`
>The expected parameters: 
>- address (*contract address*)
  
  `/contract/smartcar/function/purchaseShare`
>The expected parameters: 
>- address (*contract address*)
  
 
  
  
  
  
