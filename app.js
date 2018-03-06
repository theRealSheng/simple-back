
'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const index = require('./routes/index');
const auth = require('./routes/auth');
const warehouses = require('./routes/warehouses');
const user = require('./routes/user');
const dashboard = require('./routes/dashboard');
const booking = require('./routes/booking');
const uploads = require('./routes/uploads');
const app = express();

// -- Set Database

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

// -- Set Session

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  }),
  secret: 'some-string',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 10000 // 10 Day Cookie
  }
}));

app.use((req, res, next) => {
  app.locals.user = req.session.currentUser;
  next();
});

// -- Middlewares

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  credentials: true,
  origin: [process.env.CLIENT_URL]
}));

// -- Routes
app.use('/', index);
app.use('/auth', auth);
app.use('/warehouses', warehouses);
app.use('/user', user);
app.use('/dashboard', dashboard);
app.use('/booking', booking);
app.use('/uploads', uploads);

// -- error handlers

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'not found' });
});

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500).json({ error: 'unexpected' });
  }
});

module.exports = app;
