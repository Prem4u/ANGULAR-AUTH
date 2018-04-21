const express = require("express");
const bodyParser= require("body-parser");
const api= require("./routes/api");

const PORT= 3001;

const app= express();

app.use(bodyParser.json());
app.use('/api',api);

app.get('/',(req,res)=>{
     res.send("Hello From Server");
});

app.listen(PORT,()=>{
     console.log("server listening on port: "+PORT)
})
