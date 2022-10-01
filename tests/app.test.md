const app = require('../src/controller/app');

// super test
const request = require("supertest");
const assert = require('assert');


app.get('/', (req, res) => {
    res.status(201).json('Hello World 🇰🇷');
});

app.post("/users", (req,res) =>{
    res.json({
        name : "lee",
        email : "asdf@gmail.com",
        social : null
    })
})

request(app)
    .get("/")
    .expect(201, ('Hello World 🇰🇷'))