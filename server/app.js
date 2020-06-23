const express = require('express');
const bodyParser = require("body-parser");
const routes = require('./routes/index');
const application=require('./routes/application');
const customer =require('./routes/customer.routes');
const cors=  require('cors');

let app = express();
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use('/', routes);
app.use('/application', application);
app.use('/customers',customer);

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});