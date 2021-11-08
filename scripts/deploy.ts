import { ethers } from "hardhat";

async function main() {
  const Joeun = await ethers.getContractFactory("Joeun");
  const joeun = await Joeun.deploy();

  await joeun.deployed();

  console.log("JOEUN NFT deployed to:", joeun.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
