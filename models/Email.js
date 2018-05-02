var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var EmailSchema = new Schema({
 
  subject: {
    type: String,
    required: true
  },

  to: {
    type: String,
    required: true
  },
// date is coming from gmail we are not formating or no need date() 
//it should be string 
  date: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Email = mongoose.model("Email", ArticleSchema);

// Export the Article model
module.exports = Email;
