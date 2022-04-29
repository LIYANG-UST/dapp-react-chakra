import React, { useState } from "react";

import { ethers, Signer, Wallet } from "ethers";

import { getAccount } from "../utils/getAccount";
import { formatUnits } from "ethers/lib/utils";

const DegisMonitor: React.FC = () => {
  const [balance, getBalance] = useState("0");

  const getDegisBalance = async () => {
    const abi = ["function balanceOf(address) public view returns(uint256)"];
    const address = "0x9f285507Ea5B4F33822CA7aBb5EC8953ce37A645";

    const signer: Wallet = await getAccount();

    console.log(signer.provider);

    const degisInstance = new ethers.Contract(address, abi, signer);

    const bal = formatUnits(
      await degisInstance.balanceOf(
        "0xeB496257B64Cc2D39c291B209F465f3cfADE0873"
      ),
      18
    );

    console.log("hi", bal);
    getBalance(bal);
  };

  return (
    <div>
      <p>DEG Balance: {balance}</p>
      <button onClick={getDegisBalance}>get balance</button>
    </div>
  );
};

export default DegisMonitor;
