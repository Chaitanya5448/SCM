const hre = require("hardhat");

async function main() {
    const Track = await hre.ethers.getContractFactory("Track");
    const track = await Track.deploy();

    await track.deployed();

    console.log(`Track deployed to ${track.address}`);
}

main().catch((error) =>  {
    console.error(error);
    process.exitCode = 1;
});


