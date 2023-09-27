const router = require("express").Router();
const messages = require("./messages");

router.use("/messages", messages);

router.get("/", (req, res, next) => {
	res.send("index hit");
});

module.exports = router;
