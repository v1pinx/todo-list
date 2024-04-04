const express = require('express');
const app = express();
require('./db');
const router = require('./routes/app');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(3000, () => {
    console.log("Server is running at 3000");
})