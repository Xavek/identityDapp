import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  // There would be both the QR code Generator and Scanner.
  /*
  Home Page would render the two button one for Generate QR Code and another for Scanning the QR code.
  After rendering MetaMask Checkup would be done and connect with metamask task
  then there would file upload inputs two and single text input name
  After they submit or post or click the Generate QR Code btn GOTO: Plan2
  
  
  ------------------------------------------------------------------------------------------------------------------
                                            Frontend Hevay Architecture
  ------------------------------------------------------------------------------------------------------------------
  User => Fills Forms => Submit => Return QR Code
  BE- OF- FE => First Saves those files to the ipfs and gets back the hash and then only saves those to blockchain
  Files=> IPFS=> Hash => Saved to BC => emits msg(after sucessfull completion)
  When User Scans the QR-CODE then address is extracted and saved info associated to their address.


  ------------------------------------------------------------------------------------------------------------
                                          What to code First
  ------------------------------------------------------------------------------------------------------------
  COMPONENTS APPROACH
  [x] Header: Btn @It will indicate(bool flag) wether connected to MetaMask or not(Enforce to Rinkeby Test Network)
  [] Body: Two Sections: 
                        UPLOAD: refer to working with file upload in react
                        [x] @name input field
                        [x] @file1 input field
                        [x] @file2 input field
                        [x] @btn: to submit or generated QR code.
                        [] @flash the QR CODE and Download option
######################################################################################################
                        SCAN: refer the Working with QR Code in react
                        [] @file Upload input field 
                        [] @btn to scan
                        [] @ Space to show documents.
  */
  // 0x07EA30d9efDeDE079710Cd1551aF07C460eFaaeA
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
