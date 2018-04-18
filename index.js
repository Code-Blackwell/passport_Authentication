const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');

//DB Setup
mongoose.connect('mongodb://' + config.databaseUsername + ':' + config.databasePassword + '@ds147589.mlab.com:47589/student_aide_portal');

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);


// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("listening on port 3090");