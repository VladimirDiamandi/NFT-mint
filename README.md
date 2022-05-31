# Mint NFTs

## Upload file to nft.storage service
1. Create account on https://nft.storage/
2. Generate new api key on https://nft.storage/manage/
3. store key in .env as `NFT_STORAGE_API_KEY`
4. run `node scripts/store-asset.mjs`
5. save result ifps url in .env as `META_DATA_URL`

## Create new Smart contract to create NTFs
1. Create account in https://rpc.maticvigil.com/
2. Create new app
3. Copy app key in .env as `MATIC_API_KEY`
4. Generate private key in MetaMask and store in .env it as `PRIVATE_KEY`
5. Run `npx hardhat run scripts/deploy-contract.mjs --network PolygonMumbai`
6. Save Contract address to .env as `CONTRACT_ADDRESS`

## Create (mint) NFT
1. Run `npx hardhat run scripts/mint-nft.mjs \--network PolygonMumbai` to create NFT
2. You can check your NFTs on https://testnets.opensea.io/