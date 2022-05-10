const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ExpirienceLetter", function () {
  it("test letter generation ", async function () {
    const ExpirienceLetter = await ethers.getContractFactory("experience");
    const [user1, user2] = await ethers.getSigners();
    const experience = await ExpirienceLetter.deploy();
    await experience.deployed();

    await experience.experienceLetter(
      "abhi",
      "12",
      "fsd",
      "sdf",
      "sdf",
      "sdf",
      "fds",
      "180"
    );
    console.log(" creating experince letter..");

    expect((await experience.database["180"].name));

    // expect(await experience.expirienceletter()).to.equal("Hello, world!");

    // const setGreetingTx = await experience.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await experience.greet()).to.equal("Hola, mundo!");
  });
});
