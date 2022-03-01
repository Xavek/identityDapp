import React, { useState, useRef } from "react";
import { create } from "ipfs-http-client";
// import connectToContract from "../utils/Contract";
import abi from "../utils/Identity.json";
import { ethers } from "ethers";
import QRCode from "qrcode";
import Pictures from "./Pictures";

const Main = () => {
  const contractAddress = "0x07EA30d9efDeDE079710Cd1551aF07C460eFaaeA";
  const contractABI = abi.abi;
  // const connectContract = connectToContract(window.ethereum)
  const client = create("https://ipfs.infura.io:5001/api/v0");
  const [file, setFile] = useState("");
  const [secondFile, SetSecFile] = useState("");
  const [qrImage, setQRImage] = useState("");
  // const [isQRImage, setISQRImage] = useState(false);
  const refUserName = useRef(null);

  const handleGenerateQRCode = async (event) => {
    event.preventDefault();
    console.log("I am Being Clicked.");
    const userAddr = localStorage.getItem("Wallet_addr");
    try {
      const response = await QRCode.toDataURL(userAddr.toString());
      setQRImage(response);
    } catch (err) {
      console.error(err);
    }
  };
  const handleFileUpload = async (event) => {
    event.preventDefault();
    const userName = refUserName.current.value;
    refUserName.current.value = "";

    // handleit in try catch
    try {
      const created = await client.add(file);
      const created2 = await client.add(secondFile);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const identityContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      const addIdentity = await identityContract.addUserInfo(
        userName,
        created.path.toString(),
        created2.path.toString()
      );

      await addIdentity.wait();
    } catch (error) {
      console.error(error);
    } finally {
    }

    // const created = await client.add(file);
    // const created2 = await client.add(secondFile);
    // console.log(created);
  };
  // To retrieve the images
  // const url = `https://ipfs.infura.io/ipfs/${path}`
  // QmURUEsnvN4tukHfVNjRcc39e7nBC6TRapbMfZaihPjt2X
  const handleUpload = (event) => {
    setFile(event.target.files[0]);
  };
  const handleUploadSecond = (event) => {
    SetSecFile(event.target.files[0]);
  };
  return (
    <div className="m-2 p-2 font-mono">
      {/* File Upload */}
      {/* FIrst FIle */}
      <div>
        <input
          type="text"
          name="username"
          className="m-2 p-2 font-semibold bg-slate-300 text-black"
          placeholder="Enter Your Name"
          ref={refUserName}
          required
        />
      </div>
      <div>
        <input
          type="file"
          name="file"
          className="m-2 p-2 font-semibold bg-slate-300 text-black"
          onChange={handleUpload}
          required
        />
      </div>
      <div>
        <input
          type="file"
          name="file"
          onChange={handleUploadSecond}
          className="m-2 p-2 font-semibold bg-slate-300 text-black"
          required
        />
      </div>
      <div>
        <button
          onClick={handleFileUpload}
          className="m-2 p-2 font-semibold bg-blue-600 text-teal-200"
        >
          Upload
        </button>
      </div>
      <div>
        <button
          onClick={handleGenerateQRCode}
          className="m-2 p-2 font-semibold bg-blue-600 text-teal-200"
        >
          Get QR code
        </button>
      </div>
      <div>
        {/* Here the QR code would be flashed. */}
        {qrImage ? (
          <a href={qrImage} download>
            <img src={qrImage} alt="qrcode" />
          </a>
        ) : null}
        <Pictures />
      </div>
    </div>
  );
};

export default Main;
