require('dotenv').config()
console.log("Chai aur code");
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/Home',(req, res)=>{
    res.send ('Dhurr baal');
}),

app.get('/login',(req,res)=>{
    res.send('Login');
}),

app.get('/youtube',(req,res)=>{
    res.send('Tanmoy')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});



