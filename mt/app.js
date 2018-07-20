const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    dataBase = database.db(db.dbname);
    routes(app, dataBase);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});
