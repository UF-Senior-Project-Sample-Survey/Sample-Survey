const express = require('./config/express.js')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()

app.use(
    bodyParser.urlencoded({
        estended: false
    })
);

app.use(bodyParser.json());

const db = require("./config/config").db.uri;

mongoose.connect(db, {useNewUrlParser: true})
        .then(() => console.log("Database connected"))
        .catch(err => console.log(err));

app.listen(port, () => console.log(`Server now running on port ${port}!`));
