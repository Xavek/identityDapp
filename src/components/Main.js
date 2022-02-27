import React, { useState, useRef } from "react";
import { create } from "ipfs-http-client";
/*
    [x] File Input Fields.
    [x] NAme Input Field.
    [x] submit btn.
    [x] file functions.
    [x] btn functions.
 */
const Main = () => {
  const client = create("https://ipfs.infura.io:5001/api/v0");
  const [file, setFile] = useState("");
  const [secondFile, SetSecFile] = useState("");
  const refUserName = useRef(null);
  const handleFileUpload = async (event) => {
    event.preventDefault();
    const userName = refUserName.current.value;
    refUserName.current.value = "";
    // window.location.reload();
    // handleit in try catch
    const created = await client.add(file);
    const created2 = await client.add(secondFile);
    console.log(created);
    document.location.reload();
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
    <div className="m-2 p-2">
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
    </div>
  );
};

export default Main;
