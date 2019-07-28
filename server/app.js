//main
var express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

var path = require('path');

//ipfs section
const IPFS =require('ipfs-mini');
const ipfs = new IPFS({host:'ipfs.infura.io', port:5001,protocol:'https'}); 

//web3 and connecting to chain
var Web3 = require('web3');
MyContractJSON = require("../Blockchain/build/contracts/CrtPolice.json"); //this is connected to the migrations.json keep eye on it
var url = "http://localhost:8545";
var web3 = new Web3(url);
ContractAddress = MyContractJSON.networks[5777].address;
abi = MyContractJSON.abi;
MyContract = new web3.eth.Contract(abi, ContractAddress);

//bodyparser 
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

//for getting owner account
async function OW() {
    addr = await web3.eth.getAccounts();
    console.log(addr[0] + " = inside");
    var OWA = addr[0];
    return OWA; //returns the owner account / 1st account
}
// OW().then((data)=> {
//     console.log(data + "sdbfsdb ")
// })


app.post("/MasterPassReset", function (req, res) {
    console.log(req.body.MP);

    OW().then((OwnerAddr)=> {
        MyContract.methods.SetMP(req.body.MP).send({from: OwnerAddr,gas: 6000000}).then((data) => {
            console.log("MP send data = " + data)
        })

    // MyContract.methods.GetMP().call({from: OwnerAddr}).then((data) => {
    //     console.log(data + "from the chanina");
    // })

    })
})


app.post("/fir", function (req, res) {
    console.log(req.body);
    let FileObj = req.body.image;
    ipfs.add(FileObj,(err,hash) =>{
        if (err) {
            console.log(err);
        }
        else {
            console.log(hash);
        }
    })

})

app.listen(PORT, function (req, res) {
    console.log("Server Started At " + PORT)
})