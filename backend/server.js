const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

var messages = [];
var users   = [];

// =========== GET MESSAGES ==========
app.get('/messages', (req, res) => {
    res.send(messages);
    console.log(messages)
});

// =========== GET MESSAGES BY ID ==========
app.get('/messages/:id', (req, res) => {
    res.send(messages[req.params.id]);
    // console.log(req.params)
});

// =========== POST MESSAGES ==========
app.post('/messages', (req, res) => {
    let msg = req.body;
    console.log(msg)
    messages.push(msg.message);
    res.json(msg);
});
// =========== POST MESSAGES ==========
app.post('/messages/edit', (req, res) => {
    let msg = req.body;
    let id  = msg.message.id;
    let headline = msg.message.headline;
    let text = msg.message.text;

    messages[id].headline = headline
    messages[id].text = text

});
// =========== DELETE MESSAGES ==========
app.post('/messages/delete', (req, res) => {
    let msg = req.body;
    let id  = msg.message.id;

    messages.splice(id, 1)
    
    console.log("remove message===", messages)
    console.log(id)

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