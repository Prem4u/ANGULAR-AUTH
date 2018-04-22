const express = require("express");
const routers = express.Router();
const User = require("../model/user");
const mongoose = require("mongoose");

const dbUrl = "mongodb://prem:passprem@ds151169.mlab.com:51169/myeventdb";

mongoose.connect(dbUrl, err => {
    if (err)
        console.error("Error ! " + err);
    else
        console.log("connected to mogodb with url " + dbUrl)
}
);

//define different end points
routers.get('/', (req, res) => {
    res.send("Hello from API");
})
//register the user
routers.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((err, registeredUser) => {
        if (err)
            console.error("Error ! " + err);
        else
            res.status(200).send(registeredUser);
    });
}
);
//login the user
routers.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({"email": userData.email}, (err, user) => {
        if (!user)
            res.status(401).send("Invalid user !");
        else if (userData.password !== user.password) {
            console.log(userData.password+" "+user.password)
            res.status(401).send("invalid password");
        }
        else
            res.status(200).send(user);

    })

});
//Event end points
routers.get("/events",(req,res)=>{
    let events=[
        {
            "id":"1",
            "name": "Auto expo",
             "discription": "This is auto expo",
             "date":"2018-04-10T18:25:23.511Z"

        },
        {
            "id":"2",
            "name": "Auto expo",
             "discription": "This is auto expo",
             "date":"2018-04-10T18:25:23.511Z"

        },
        {
            "id":"3",
            "name": "Auto expo",
             "discription": "This is auto expo",
             "date":"2018-04-10T18:25:23.511Z"

        }
    ];
    res.json(events);
});
routers.get("/special",(req,res)=>{
    let events=[
        {
            "id":"1",
            "name": "Auto expo",
             "discription": "This is auto expo",
             "date":"2018-04-10T18:25:23.511Z"

        },
        {
            "id":"2",
            "name": "Auto expo",
             "discription": "This is auto expo",
             "date":"2018-04-10T18:25:23.511Z"

        },
        {
            "id":"3",
            "name": "Auto expo",
             "discription": "This is auto expo",
             "date":"2018-04-10T18:25:23.511Z"

        }
    ];
    res.json(events);
});

module.exports = routers;