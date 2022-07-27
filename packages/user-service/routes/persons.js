var express = require('express');
var router = express.Router();

router.get("/all", function(req, res) {
    res.status(200).send("Persons api working fine");
});

module.exports = router;