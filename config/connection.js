const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/socialnetworkDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
