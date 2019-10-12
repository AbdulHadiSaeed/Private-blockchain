# Deploy Your Smart Contract on Private-blockchain
deploy your smart contract on Private BlockChain using geth 

Note: you need to install geth for this. To install geth you can go to https://geth.ethereum.org/downloads/
To make Private Ethereum blockchain
geth --port 3000 --networkid 58343 --nodiscover --datadir=./blkchain --maxpeers=0  --rpc --rpcport 8543 --rpcaddr 127.0.0.1 --rpccorsdomain "*" --rpcapi "eth,net,web3,personal,miner" --"allow-insecure-unlock" 


to connect with gethconsole

geth attach http://127.0.0.1:8543

making new account:

 personal.newAccount('seed')

Unlock account:

 personal.unlockAccount(web3.eth.coinbase, "seed", 15000)

Check accounts:

eth.accounts




to get dummy Ether

web3.fromWei(eth.getBalance(eth.coinbase), "ether")



To check Balance
 eth.getBalance(eth.coinbase)


To verify that it is connected to block chain

message = await Hello.deployed()
Then again type message:
message
