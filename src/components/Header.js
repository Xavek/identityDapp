import React, { useEffect, useState } from "react";

const Header = () => {
  const [myAcc, setMyAcc] = useState(false);

  const handleConnectClick = async () => {
    // e.preventDefault();
    // Checking the presence of ethereum object.
    if (window.ethereum) {
      if (window.ethereum) {
        window.ethereum.on("chainChanged", (_chainId) =>
          window.location.reload()
        );
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        const rinkebyId = "0x4";
        if (chainId === rinkebyId) {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const account = accounts[0];
          console.log(account);
          localStorage.setItem("Wallet_addr", account);
          setMyAcc(true);
        } else {
          alert("Please Use Rinkeby Test Network");
        }
      }
    }
  };

  useEffect(() => handleConnectClick);
  return (
    <div className="m-2 p-2 font-mono text-lg">
      <button
        className="m-4 p-2 font-semibold bg-blue-600 text-teal-200"
        onClick={handleConnectClick}
      >
        {myAcc ? "Connected" : "Connect To Wallet"}
      </button>
    </div>
  );
};

export default Header;
