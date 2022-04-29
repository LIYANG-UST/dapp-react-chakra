import { ethers, Signer, Wallet } from "ethers";

export const getAccount = async (): Promise<Wallet> => {
  const mnemonic: string | any = process.env.REACT_APP_PHRASE_FUJI;

  console.log(`Mnemonic: ${mnemonic}`);

  const wallet: Wallet = ethers.Wallet.fromMnemonic(mnemonic);

  const provider = new ethers.providers.JsonRpcProvider(
    "https://api.avax.network/ext/bc/C/rpc"
  );

  return new Wallet(wallet.privateKey, provider);
};
