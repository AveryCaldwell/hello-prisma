const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();
// // router.get("/", function (req, res, next) {
// // 	res.send("Messages hit");
// // });

const { getAllMessages } = require("../controllers/messagesController"); // Update the path

// Define the route using the controller function
router.get("/", getAllMessages);

module.exports = router;
