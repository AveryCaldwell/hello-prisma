const express = require("express");
const routes = require("./api/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
	res.send("Hello World");
});
// Turn on routes
app.use("/api", routes);

// Default response for any other request (Not Found)
app.use((req, res) => {
	res.status(404).end();
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
