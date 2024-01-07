const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: { type: String },
  dress: { type: String },
  age: { type: String },
});

module.exports = mongoose.model("Authors", AuthorSchema);
