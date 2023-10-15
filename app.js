var express = require('express');
var path = require('path');
var logger = require('morgan');
const rateLimit = require('express-rate-limit');
const requestIp = require('request-ip');
const mongoose = require('mongoose');
const { unsupportedMethodHandler } = require('./middleware/easterEgg');
const db = require('./config/connection');

require('dotenv').config();


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("Connected to database!"));


var experienceRouter = require('./routes/experience');
var projectsRouter = require('./routes/project');
var educationRouter = require('./routes/education');
var contactRouter = require('./routes/contacts');
var meRouter = require('./routes/me');
var routeRouter = require('./routes/route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestIp.mw());
app.use(rateLimit({
  windowMs: process.env.DAILY_LIMIT_TIME * 60 * 60 * 1000,
  max: process.env.DAILY_LIMIT, // limit each IP to 10 requests per windowMs
  keyGenerator: (req, res) => {
    console.log(req.clientIp)
    return req.clientIp // IP address from requestIp.mw(), as opposed to req.ip
  },
  handler: (req, res) => {
    res.status(429).json({
      message: 'Stop spamming my API!!!! Blocking you >:(',
    });
  },
}));
// Middleware to block requests from User-Agents other than "Postman"
app.use((req, res, next) => {
  const userAgent = req.get('User-Agent');
  if (userAgent && userAgent.includes(process.env.ALLOWED_USER_AGENT)) {
    // Allow the request to continue
    next();
  } else {
    // Block the request with a response
    res.status(403).send('Access denied. Only Postman requests are allowed.');
  }
});


// Apply the unsupportedMethodHandler middleware to all routes
app.use('/api/', unsupportedMethodHandler, routeRouter);
app.use('/api/experience', unsupportedMethodHandler, experienceRouter);
app.use('/api/projects', unsupportedMethodHandler, projectsRouter);
app.use('/api/education', unsupportedMethodHandler, educationRouter);
app.use('/api/contact', unsupportedMethodHandler, contactRouter);
app.use('/api/resume', unsupportedMethodHandler, meRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(3001, () => console.log("Listening on port 3001!"));
module.exports = app;