import React, { useEffect, useState } from "react";

/*
Function of this Componenet:
It would be the btn which would be responsible for connecting with the MetaMask and ethereum state.
For Simplicity it would connect with ethereum global object and would save the address in localStorage.

---------------------------------------------------------------------------------------------------------
[x] Make Button with minimal styles
[x] Add the Onclick function.
[x] Check for the ethereum global object injected by MetaMask.
[x] Request to connect with the Wallet.
[x] Force the user to be on test-Net.
[x] Chnage the state of the wallet btn after connected.
[x] Add the User Addr to localStorage for simplicity.

 */

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
          setMyAcc(true);
        } else {
          alert("Please Use Rinkeby Test Network");
        }
      }
    }
  };

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
