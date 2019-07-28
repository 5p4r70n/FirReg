pragma solidity ^0.5.0;

 contract MasterPass { //hey
    
    address owner;
    string password;  //creating a major password
    
    modifier onlyMe{  //modifier named as only me
        require(msg.sender == owner);
        _;
    }
    constructor() public {
        owner=msg.sender;    //declaring ower as message sender
    }
    
    function SetMP(string memory _password) public onlyMe {  //password changing function that only done my me 
        password = _password;
    }
    function GetMP() public view onlyMe returns (string memory _password) {
        return _password = password;
    }
        
    
}