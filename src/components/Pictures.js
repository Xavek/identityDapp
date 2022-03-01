import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import connectToContract from "../utils/Contract";
// Clean all the meshups
const Pictures = () => {
  const connectContract = connectToContract(window.ethereum);
  const [userAddrs, setUserAddr] = useState("");
  const [userInfoobj, setUserInfoObj] = useState([]);
  const [scanQr, setScanQR] = useState(false);
  const handleScanFile = (result, error) => {
    if (!!result) {
      console.log(result.text);
      setUserAddr(result.text);
      setScanQR(false);
    }
    if (!!error) {
      console.info(error);
    }
  };
  const handleScanBtn = () => {
    setScanQR(true);
  };
  const handleGetInfo = async () => {
    if (connectContract) {
      const userAddr = "0x69BCc519Ba5607B85e090cC2a4BA08a1d27C8aa7";
      try {
        const userInfo = await connectContract.getUser(userAddr);
        // const userInfoA = await connectContract.getUser(userAddrs);
        console.log(userInfo);
        setUserInfoObj(userInfo);
        console.log(userInfo.hashOfCovid);
        console.log(userInfo.hashOfMarkSheet);
        console.log(userInfo.name);
        console.log(userInfoobj);
      } catch (error) {
        console.info(error);
      }
    }
  };

  return (
    <div>
      <button
        className="m-2 p-2 font-semibold bg-blue-600 text-teal-200"
        onClick={handleScanBtn}
      >
        Scan QR Code
      </button>
      {scanQr ? (
        <QrReader onResult={handleScanFile} style={{ width: "50%" }} />
      ) : null}
      <button
        className="m-2 p-2 font-semibold bg-blue-600 text-teal-200"
        onClick={handleGetInfo}
      >
        Get Info
      </button>
      <div>
        <img
          src={`https://ipfs.infura.io/ipfs/${userInfoobj.hashOfCovid}`}
          alt="Covid Vaccine Certificate"
          className="h-56 w-80"
        />
        <img
          src={`https://ipfs.infura.io/ipfs/${userInfoobj.hashOfMarkSheet}`}
          alt="Covid Vaccine Certificate"
          className="h-56 w-80"
        />
      </div>
    </div>
  );
};

export default Pictures;
