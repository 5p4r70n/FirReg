var express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
var Web3=require('web3');
var url="http://localhost:8545" ;
var web3 = new Web3(url);
var bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));




web3.eth.getAccounts().then(accounts=>{
    console.log(accounts[0]);
})

app.post("/MasterPass",function(req,res){
    console.log(req.body);

} )

app.listen(PORT, function (req, res) {
    console.log("Server Started At "+PORT)
})