const { expect } = require("chai");
const { ethers } = require("hardhat");

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });

// describe("Deploy test", function () {
//   it("should return the deployed staking contract address", async function () {
//     const Factory = await ethers.getContractFactory("QuantumFactory");

//     const factory = await Factory.deploy();
//     await factory.deployed();

//     //calling create contract function
//     const tx = await factory.createStakingContract();

//     const add = await tx.wait();

//     console.log(add);
//   });
// });
