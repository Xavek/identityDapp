import { ethers } from "ethers";

import abi from "./Identity.json";

const contractAddress = "0x07EA30d9efDeDE079710Cd1551aF07C460eFaaeA";
const contractABI = abi.abi;

export default function connectToContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
