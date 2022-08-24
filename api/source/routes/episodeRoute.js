const express = require("express");
const fs = require("fs");
const router = express.Router();
const episodeList = require("../data/episode_list.json");

router.post("/episode", (req, res) => {
  if (!req.body.episodeName) {
    return res.status(400).send("Episode is already submitted");
  }

  findEpisode = episodeList.find(
    (user) => user.episodeName === req.body.episodeName
  );

  if (findEpisode) {
    return res.status(400).send("email already exists");
  }

  let episode_json = {
    episodeName: req.body.episodeName,
    episodeId: req.body.episodeId,
    publishTime: req.body.publishTime,
  };

  fs.readFile("source/data/episode_list.json", function (err, data) {
    var json = JSON.parse(data);
    json.push(episode_json);
    fs.writeFile(
      "source/data/episode_list.json",
      JSON.stringify(json),
      function (err) {
        if (err) res.send(500).send("something went wrong");
        res
          .status(200)
          .send(`${req.body.episodeName} created succesfully, Thank you!`);
      }
    );
  });
});

router.get("/episode", (req, res) => {
  return res.status(200).send(episodeList);
});

module.exports = router;
