require("dotenv").config();

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// API endpoints
// return json object with greeting
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// return date in unix and utc format
app.get("/api/:date", (req, res) => {
  let dateParam = req.params.date.trim();

  const unixRegex = /^\d+$/;
  const dateRegex = /^\d{4}-\d{1,2}-\d{1,2}$/;

  let date;

  if (unixRegex.test(dateParam)) {
    date = new Date(parseInt(dateParam));
  } else if (dateRegex.test(dateParam)) {
    date = new Date(dateParam);
  } else {
    return res.status(400).json({ error: "Invalid Date" });
  }

  if (isNaN(date.getTime())) {
    return res.status(400).json({ error: "Invalid Date" });
  }

  const unixDate = date.getTime();
  const utcDate = date.toUTCString();

  res.json({ unix: unixDate, utc: utcDate });
});

// return current date if no date is passed
app.get("/api", (req, res) => {
  const curDate = new Date();
  unixDate = curDate.getTime();
  utcDate = curDate.toUTCString();
  res.json({ unix: unixDate, utc: utcDate });
});

// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
