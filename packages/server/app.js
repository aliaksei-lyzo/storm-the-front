const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const winston = require('winston');

const usersRouter = require('./routes/users');

const { combine, timestamp, printf } = winston.format;

const MongoClient = require('mongodb').MongoClient;
const MongoUri = 'mongodb://localhost:27017/';

app.get('/', (req, res) => {
  MongoClient.connect(MongoUri, { useNewUrlParser: true })
  .then(client => {
      //Add your logic
  });
  .catch(Error){
    console.log("Mongo Error",Error);
  }
});

const myFormat = printf(info => `${info.timestamp}: ${info.message}`);

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    myFormat,
  ),
  transports: [
    new winston.transports.File({ filename: 'general.log' }),
  ]
});

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.options('*', cors({
  origin: true,
  credentials: true,
}));

app.use(cors({
  origin: true,
  credentials: true,
}));

// app.use('/news', blogRouter);
// app.use('/events', eventsRouter);
app.use('/users', usersRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json(err);
});

app.listen(8081, () => console.log('Listening on port 8081'));
