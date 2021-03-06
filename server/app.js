//main
var express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

var path = require('path');

// ipfs section
// const IPFS =require('ipfs-mini');
// const ipfs = new IPFS({host:'ipfs.infura.io', port:5001,protocol:'https'}); 

//web3 and connecting to chain
var Web3 = require('web3');
MyContractJSON = require("../Blockchain/build/contracts/CrtPolice.json"); //this is connected to the migrations.json keep eye on it
var url = "http://localhost:8545";
var web3 = new Web3(url);
ContractAddress = MyContractJSON.networks[5777].address;
abi = MyContractJSON.abi;
MyContract = new web3.eth.Contract(abi, ContractAddress);

console.log("contract address  " + ContractAddress);

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
    // console.log(addr[0] + " = inside");
    var OWA = addr[0];
    return OWA; //returns the owner account / 1st account
}
// OW().then((data)=> {
//     console.log(data + "sdbfsdb ")
// })


app.post("/MasterPassReset", function (req, res) {
    console.log(req.body.MP);

    OW().then((OwnerAddr) => {
        MyContract.methods.SetMP(req.body.MP).send({
            from: OwnerAddr,
            gas: 6000000
        }).then((data) => {
            console.log("MP send data = " + data)
        })

        // MyContract.methods.GetMP().call({from: OwnerAddr}).then((data) => {
        //     console.log(data + "from the chanina");
        // })

    })
})


app.post("/fir", function (req, res) {
    console.log(req.body);
    console.log(req.body.FirItem.Prathy);
    Ctype = parseInt(req.body.FirItem.Ctype)
    console.log(Ctype);
    OW().then((OwnerAddr) => {
        MyContract.methods.AddPetition(req.body.FirItem.Prathy, req.body.FirItem.Vaadi, req.body.FirItem.Tittle, Ctype, req.body.FirItem.WriteUp).send({
            from: OwnerAddr,
            gas: 600000000
        }).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log("error in addPetition = " + err);
        })
    })
    web3.eth.getBlock("latest", false, (error, result) => {
        console.log(result.gasLimit + "gas limt")
        // => 8000029
      });
})

    app.post("/signUp", async function (req, res) {
        OwnerAddr = await OW()
        address = await web3.eth.personal.newAccount(req.body.station.Password)
        console.log(address + "neww " + "password =" + req.body.station.Password)
        NewPoSt = await MyContract.methods.NewPoSt(req.body.station.StationName, address, req.body.station.Password).send({
            from: OwnerAddr,
            gas: 6000000
        })
        err = await NewPoSt.catch()
        console.log(err);

    })

    app.get("/getMpass" ,async function(req,res){
        OwnerAddr=await OW();
        MP = new Array();
        Mp=await MyContract.methods.GetMP().call({from: OwnerAddr,gas:6000000});
        MP.push(Mp);
        res.send(MP);
        console.log(MP + "Master pass");
    })

    app.get("/getCase", async function(req,res) {
        OwnerAddr=await OW();
        caseData = new Array();
        hPgNo= await MyContract.methods.Pgno.call({from:OwnerAddr,gas: 6000000})
        PgNo= await web3.utils.toDecimal(hPgNo);
        // console.log(PgNo + 'Page No');
        for (i=1;i<=PgNo;i++){
            pdata= await MyContract.methods.MPetition(i).call({from:OwnerAddr,gas:6000000})
            // console.log(pdata.Casetype + "inside loop caseType");
                if (pdata.Casetype=== 0){
                    pdata.Casetype = "Criminal";
                }
                else if (pdata.Casetype=== 1){
                    pdata.Casetype="Civil"
                }
                else if (pdata.Casetype=== 2){
                    pdata.Casetype="Narcotic"
                }
                else {
                    pdata.Casetype="Terririst"
                }

                // console.log(pdata + "after ifelse")

            await caseData.push(pdata)
            // console.log(pdata + "after pushing pdata")
                            }
        // console.log(caseData + "after for loop")
        res.send(caseData);
        
    })

    app.get("/getPoSt",async function (req,res) {
        OwnerAddr = await OW();
        PoliceStation = new Array();
        PSno = await MyContract.methods.PSNo.call({from:OwnerAddr,gas : 6000000 });
        console.log(PSno + "police station no");

        //getting all police station and add it to PoliceStation array
            for (i=0;i<=PSno;i++){
                Station = await MyContract.methods.policemap(i).call({from : OwnerAddr ,gas : 6000000});
                console.log(Station + " police station details inside loop")
                await PoliceStation.push(Station)
            }
         res.send(PoliceStation);
    })

app.listen(PORT, function (req, res) {
    console.log("Server Started At " + PORT)
})