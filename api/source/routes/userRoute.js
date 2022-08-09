const express = require("express");
const fs = require("fs");
const router = express.Router();
const usersList = require("../data/user_list.json");

router.post("/login", (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .send("Please login with your email and password");
    }
    let findEmail = usersList.find((user) => user.email === req.body.email);
    if (!findEmail) {
        return res.status(400).send("User not found");
    }

    if (findEmail.password !== req.body.password) {
        return res.status(403).send("Incorrect password");
    }
    return res.status(200).send("Logged in succesfully");
});

router.post("/register", (req, res) => {

    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .send("Please register with your name, email and password");
    }

    findEmail = usersList.find((user) => user.email === req.body.email);

    if (findEmail) {
        return res.status(400).send("email already exists");
    }

    let user_json = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };

    fs.readFile("source/data/user_list.json", function (err, data) {
        var json = JSON.parse(data);
        json.push(user_json);
        fs.writeFile(
            "source/data/user_list.json",
            JSON.stringify(json),
            function (err) {
                if (err) res.send(500).send("something went wrong");
                res.status(200).send(
                    `User created succesfully, welcome aboard ${req.body.name}`
                );
            }
        );
    });
});

module.exports = router;
