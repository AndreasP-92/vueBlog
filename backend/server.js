const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

var articles = [];
var users   = [];

// =========== GET ARTICLES ==========
app.get('/articles', (req, res) => {
    res.send(articles);
});

// =========== GET ARTICLES BY ID ==========
app.get('/articles/:id', (req, res) => {
    res.send(articles[req.params.id]);
});

// =========== POST ARTICLES ==========
app.post('/articles', (req, res) => {
    let msg = req.body;
    articles.push(msg.articles);
    res.json(msg);
});
// =========== POST ARTICLES ==========
app.post('/articles/edit', (req, res) => {
    let msg = req.body;
    let id  = msg.articles.id;
    let headline = msg.articles.headline;
    let text = msg.articles.text;

    articles[id].headline = headline
    articles[id].text = text

});
// =========== DELETE ARTICLES ==========
app.post('/articles/delete', (req, res) => {
    let msg = req.body;
    let id  = msg.articles.id;
    articles.splice(id, 1)
});

// =========== POST USERS ==========
// app.post('/register', (req, res) => {
//     let registerData = req.body;
//     let newIndex = users.push(registerData);
//     registerData.id = newIndex - 1;
//     console.log(users);

//     res.json(registerData);
// });

app.listen(port, () => console.log('app running'));