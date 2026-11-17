var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.redirect("/public/pagina-inicial.html");
});

module.exports = router;