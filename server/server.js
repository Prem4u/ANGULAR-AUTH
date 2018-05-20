const express = require("express");
const bodyParser= require("body-parser");
const api= require("./routes/api");
const cors= require('cors');
const PORT= 3001;

const app= express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api',api);


app.get('/',(req,res)=>{
     res.send("Hello From Server");
});

app.listen(PORT,()=>{
     console.log("server listening on port: "+PORT)
})
