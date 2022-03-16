const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: "*"
};


const uri = process.env.MONGODB_ATLAS;
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useMongoClient: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connected succesfully");
});

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

app.set("json spaces", 2);

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.listen(port, () => {
  console.log("Server running on port " + port);
});
