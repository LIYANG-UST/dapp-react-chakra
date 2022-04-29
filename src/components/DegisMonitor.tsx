import React, { useState } from "react";

import { ethers } from "ethers";

const DegisMonitor: React.FC = () => {
  const [balance, getBalance] = useState(0);

  const getDegisBalance = async () => {
    const abi = ["balanceOf(address) returns(uint256)"];
    const address = "0x9f285507Ea5B4F33822CA7aBb5EC8953ce37A645";
    const provider = new ethers.providers.JsonRpcProvider(
      "https://api.avax.network/ext/bc/C/rpc"
    );
    const signer = provider.getSigner(0);
    const degisInstance = new ethers.Contract(address, abi, signer);

    const bal = await degisInstance.balanceOf(
      "0xeB496257B64Cc2D39c291B209F465f3cfADE0873"
    );

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
