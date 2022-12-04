const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let posts = [];
let count = 0;
// middleware to hit API after every 5 minutes automatically
(function test() {
    setInterval(() => {
        count++;
        console.log("Interval");
        // fetch('https://node2-8m9f.onrender.com')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log("fetching time ->", count, data[0]);
                posts = data;
            }).catch(err => console.log(err));
    }, 5000);
}());


app.get('/', async (req, res) => {
    res.send("Hello World");
});


app.listen(5000, () => console.log('Listening on port 5000'));



