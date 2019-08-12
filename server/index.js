const express = require('express');
const bodyParser = require('body-parser');
// const pino = require('express-pino-logger')();
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

const apiRouter = require("./routes/api");

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/../client/public')));

// Routes
app.use("/api", apiRouter);

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/public/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));