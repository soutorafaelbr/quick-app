const express = require('express');

const app = express();
app.use(express.json());

app.use('/', require('./src/Http/Routes/api'));

app.listen(3000, '0.0.0.0');