pragma solidity ^0.5.0;


contract CrtPolice {
    
    
    
     address owner;
    string password;  //creating a major password
    
    modifier onlyMe{  //modifier named as only me
        require(msg.sender == owner);
        _;
    }
    constructor() public {
        owner=msg.sender;    //declaring ower as message sender
    }
    
    
    
    
    
    
    uint PSNo=0 ; //each station adding it will increase
    struct PoSt{
        string name;
        address StatAddr;
        string Password;
    }
    
    mapping(uint=>PoSt) policemap;
    
    function NewPoSt(string memory _name,address _StatAddr,string memory _Password) public onlyMe{
        PSNo +=1;
        policemap[PSNo] = PoSt(_name,_StatAddr,_Password);
        
        
    }
    
}