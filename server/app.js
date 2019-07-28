var express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

var path = require('path');

var Web3 = require('web3');
MyContractJSON = require("../Blockchain/build/contracts/CrtPolice.json"); //this is connected to the migrations.json keep eye on it
var url = "http://localhost:8545";
var web3 = new Web3(url);
ContractAddress = MyContractJSON.networks[5777].address;
abi = MyContractJSON.abi;
MyContract = new web3.eth.Contract(abi, ContractAddress);

console.log(ContractAddress);

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
    extended: false
}));


// cores for access control origin
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// var OwnerAddr;
// var OwnerBal;

// web3.eth.getAccounts().then((addr) => {
//     let OA = addr[0];
//     OwnerAddr = OA;
//     console.log(OwnerAddr + "  owner addr");   // << this works
// })
// console.log(OwnerAddr + " owner xcbxbx");     // << this is not working 

// // web3.eth.getBalance(OwnerAddr).then((bal) => {
// //     console.log(bal);
// // })

function OW() {
    web3.eth.getAccounts().then((addr) => { 
        OWA = addr[0];
        console.log (OWA + " inside function" )
        return OWA;
    })
            }
            console.log (OW() + " dsbfhsdjfh");



app.post("/MasterPassReset", function (req, res) {
    console.log(req.body.MP);
    web3.eth.getAccounts().then((addr) => {
        var OwnerAddr = addr[0];
        console.log(OwnerAddr);
            MyContract.methods.SetMP(req.body.MP).send({from:OwnerAddr,gas:6000000}).then((data)=>
            {console.log("MP send data = "+ data)})
    })
    MyContract.methods.GetMP().call({from:OwnerAddr}).then((data) => {
            console.log(data);
    })

})

app.post("/fir", function (req, res) {
    console.log(req.body);
    let FileObj = req.files.FirItem.image;
    console.log(FileObj.name);
})

app.listen(PORT, function (req, res) {
    console.log("Server Started At " + PORT)
})