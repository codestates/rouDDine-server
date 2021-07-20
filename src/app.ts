import express from 'express'

const app  = express();
const router = express.Router();
const port = 3000

app.get("/", function (req, res) {
    console.log("nodemon");
    res.status(201).send("<h1>Hello World !!</h1>");
});

app.get('/about', function(req, res) {
    res.send('About birds');
  });
app.listen(port, function () {
    console.log(`start express server on port ${port}`);
});

function add (num1:[] , num2:number ){

}
