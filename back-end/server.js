const express = require("express");
const app = express();
const port = 5000

app.get('/', (req, res) => {
	res.send("aku benci kalian semua");
})

app.listen(port, () => {
	console.log("Server ON");
});