const Artist = require("../models").artist;

exports.findAllArtists = (req, res) => {
  Artist.find({})
    .then((data) => {
      res.json({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some Error Occured while fetching artists",
      });
    });
}; 