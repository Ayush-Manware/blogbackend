const express = require("express");
const { storedData } = require("./data");
const app = express()
const Port = 2100;
const Cors = require("cors")

app.use(Cors())

app.get("/", (req, res)=>{
    res.send(storedData)
})


app.listen(Port, ()=>{
    console.log("Server Started")
})