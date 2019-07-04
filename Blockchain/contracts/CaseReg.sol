pragma solidity ^0.5.0;

contract CaseReg{
    
    enum CType {Criminal,Civil,Narcotic,Terririst}
     uint public Pgno = 0 ; // it will increase while adding each case
     
    struct Petition {
        string Prathy; //Accuse
        string Vaadi; //mattavan
        string Tittle; //vishayam   
        CType Casetype; // as 0-3 based on above enum
        string Image; //ipfs image hash
        string WriteUp; //blaa blaaa blaaa
    }
    
    mapping(uint=>Petition) public MPetition; //going to map the petition struct via page no
    
    function AddPetition (string memory _Prathy,string memory _Vaadi,string memory _Tittle,CType _Casetyp,string memory _image,string memory _WriteUp) public {
     Pgno +=1; //page no increament
     MPetition[Pgno]= Petition(_Prathy,_Vaadi,_Tittle,_Casetyp,_image,_WriteUp); //pushing inputs to the structure
    }
    
    
    
}