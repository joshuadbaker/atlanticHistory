var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Comments = new Schema ({
      title: { type: String, default: 'Title' },
      body: String,
      author: String,
      date: { type: Date, default: Date.now }
    });

module.exports = mongoose.model('Comments', {
  title: { type: String, default: 'Title' },
  body: String,
  author: String,
  date: { type: Date, default: Date.now }
});