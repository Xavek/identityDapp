//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Identity {
    // User Data type
    struct UserInfo {
        string name;
        string hashOfCovid;
        string hashOfMarkSheet;
    }

    UserInfo[] private userInfoArray;

    mapping(address => UserInfo) private userInfoMap;

    event infoAdded(address indexed sender, string message);

    // there could be the address bug so
    // write full coverage test.
    // Implement the events
    function addUserInfo(
        string memory _name,
        string memory _hashOfCovid,
        string memory _hashOfMarkSheet
    ) external {
        UserInfo memory newInfo = UserInfo({
            name: _name,
            hashOfMarkSheet: _hashOfMarkSheet,
            hashOfCovid: _hashOfCovid
        });
        userInfoArray.push(newInfo);
        userInfoMap[msg.sender] = newInfo;
        emit infoAdded((msg.sender), "Added Information Sucessfully");
    }

    // function to set the key:value pair
    // where the key would be the caller address and value would be its array of items,

    // Testing the smart contract.
    function getUser(address _addr) public view returns (UserInfo memory) {
        return userInfoMap[_addr];
    }

    // while testing insights on conatract behaviour
    // 1. Only the owner address would be saved in mapping.
    // 2. But with address every can view the address mapped value.
    // Furthermore: Connect with the IPFS CLI and store the hash of contents
}
