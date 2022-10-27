Task 1.

Minting token with ID 1 by the owner:
![image](https://user-images.githubusercontent.com/89184586/198235175-aa958dd1-98ba-47c3-b77e-30325c69cd1e.png)

Approving other account to buy the token with ID 1
![image](https://user-images.githubusercontent.com/89184586/198236389-48442d56-11ad-4dd2-ac27-fbb3e27fc2aa.png)

Buying the token with ID 1 by approved account
![image](https://user-images.githubusercontent.com/89184586/198236847-57c05a10-d44a-429b-9b8b-8130ac6f9abe.png)

Checking the owner of the token with ID 1. The owner is updated
![image](https://user-images.githubusercontent.com/89184586/198236975-4e2cb7e7-45df-4a27-a6aa-e159605f7e1e.png)


Task 3

Minting the nft with parameters of starting price 15 and token uri
![image](https://user-images.githubusercontent.com/89184586/198260317-72b7a468-79be-4b05-a8c3-bac808f331f3.png)

Current owner of nft with tokenId 1 is the seller
![image](https://user-images.githubusercontent.com/89184586/198260525-a55abd09-4671-4bba-88a4-ab1d233044fc.png)

Made a bit from another account 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2 with a price 20
![image](https://user-images.githubusercontent.com/89184586/198260881-da4b6e53-aa1a-4511-bf70-b936a352d711.png)

Now, when trying to make a smaller bid at a price 15 from another account 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db, it must give an error, because the bit must be larger than the highest one
![image](https://user-images.githubusercontent.com/89184586/198261140-88060457-0a6b-48d5-a655-c094296c47e6.png)

When trying to end the auction from NOT seller account, it must return an error
![image](https://user-images.githubusercontent.com/89184586/198261416-e9854c78-4ff7-4eff-9869-7c1e56a73893.png)

The seller can only finish the auction after 2 minutes since the beginning of it. 
Now, the seller finishes the auction and checks current owner of nft with tokenId 1
![image](https://user-images.githubusercontent.com/89184586/198261790-1f18df17-2302-43fb-a333-5dbb8dabe816.png)

The winner of the auction is the account 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2 that made a bit 20. Now, this account is the owner of the nft
