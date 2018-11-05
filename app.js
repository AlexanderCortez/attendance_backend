const app = require('express')();
const bodyParser = require('body-parser');
require('dotenv').config();
const { PORT, NODE_ENV } = process.env;
const mongoose = require('mongoose');
const config = require('./config')(NODE_ENV);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', require('./app/controllers'));

app.listen(PORT, (err) => {
  if (!err) {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.database, { useNewUrlParser: true });
    console.log(`Runnnig in port ${PORT} in ${NODE_ENV} mode`);
  } else {
    console.log('Error to start server:', err.message);
  }
});