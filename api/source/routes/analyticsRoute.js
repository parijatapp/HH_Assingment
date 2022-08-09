const express = require("express");
const fs = require("fs");
const router = express.Router();
const episodeDownloads = require("../data/data")
const topHours = require("../data/data")

router.get("/episodeDownloads", (req, res) => {
    return res.status(200).send(episodeDownloads);
});

router.get("/topHours",(req,res)=>{
    return res.status(200).send(topHours)
})

module.exports = router;
