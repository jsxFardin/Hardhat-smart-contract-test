// async function main() {
//     const [deployer] = await ethers.getSigners();

//     console.log("Deploying contracts with the account:", deployer.address);

//     const token = await ethers.deployContract("Token");

//     console.log("Token address:", await token.getAddress());
// }

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });
const { ethers } = require("hardhat");

async function main() {
  const nftMarketplace = await ethers.deployContract("Token");
  await nftMarketplace.waitForDeployment();

  console.log("Contract deployed");
}

main()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));