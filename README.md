### Decentralized Identity Management Application which stores User unique documents such as Passports, Covid Vaccine Certificates, etc, and Generates QR Code which can be Scanned and retrieve stored files.

### User first connects with Metamask (auth) then can upload the files(pays gas fees) and gets back the Scannable QR Code. When Scanning the QR Code he gets the corresponding image/file stored in IPFS(Decentralized storage).

**Technologies Used**

- Solidity: Wrote Smart Contract which stores the User data as <structs> with corresponding mapping of (address=><structs>). User <structs> capable of storing <name>, <string>(IPFS file content HASH).

- Hardhat and Ethers.js: Used for developing(Hardhat) and Ethers js(connecting to React Frontend).

- Infura IPFS: Used Infura IPFS node API to connect to Interplanetary File System and stored user's file returns content address(unique hash).

- React: CRA Template to Power the Frontend with Tailwind CSS for styling.

- QR Code and react-qr-code: Used to generate QR code(qrcode) and to scan used (react-qr-code).

Smart Contract is Deployed at Alchemy.
