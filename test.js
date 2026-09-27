const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("It works!");
});

app.listen(3000, () => {
    console.log("SERVER IS RUNNING ON 3000");
});
