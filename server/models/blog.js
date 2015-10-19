// app/models/blogPost.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  title: { type: String, default: 'Title' },
  author: { type: String, default: 'Ian Aebel'}, 
  body: { type: String, default: 'Title'},
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean
});

module.exports = mongoose.model('Blog', {
  title: { type: String, default: 'Title' },
  author: { type: String, default: 'Ian Aebel'}, 
  body: { type: String, default: 'Title'},
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean
});