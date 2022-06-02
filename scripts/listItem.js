const { ethers } = require("hardhat")
const { CONTRACT_ADDRESS, META_DATA_URL, TOKEN_ID } = process.env;

const PRICE = ethers.utils.parseEther("0.1")

async function list() {
    const nftMarketplace = await ethers.getContractFactory("NftMarketplace")
    console.log("Listing NFT...")
    const tx = await nftMarketplace.attach(CONTRACT_ADDRESS).listItem(META_DATA_URL, TOKEN_ID, PRICE)
    await tx.wait(1)
    console.log("NFT Listed!")
}

list()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })