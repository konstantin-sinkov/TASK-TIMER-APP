const express = require('express');
require('dotenv').config()

const configs = require('./config/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.listen(configs.PORT, () => {
    console.log(`running on port ${configs.PORT}`);
});

