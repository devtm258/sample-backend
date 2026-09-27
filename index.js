require('dotenv').config();

console.log("Chai aur code");

const express = require('express');
const app = express();

const port = 3000;

const githubData = {
    login: "devtm258",
    id: 252404816,
    node_id: "U_kgDODwtkUA",
    avatar_url: "https://avatars.githubusercontent.com/u/252404816?v=4",
    url: "https://api.github.com/users/devtm258",
    html_url: "https://github.com/devtm258",
    name: "Tanmoy Maity",
    public_repos: 12,
    public_gists: 0,
    followers: 0,
    following: 1
};

app.get('/', (req, res) => {
    res.send('Dhur Baal!');
});

app.get('/github', (req, res) => {
    res.json(githubData);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
