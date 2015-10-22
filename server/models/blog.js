// app/models/blogPost.js
// grab the mongoose module
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Tag = require('./tag.js')
    BlogSchema = new Schema({
      title: { type: String, default: 'Title' },
      author: { type: String, default: 'Ian Aebel'}, 
      body: { type: String, default: 'Title'},
      tags: [Tag],
      date: { type: Date, default: Date.now },
      hidden: Boolean
    });

// module.exports = {
//   get: function() {
//     var blogs = [];
//   },
//   all: function() {
//     return notesArray;
//   },
//   update: function() {

//   },
//   delete: function() {

//   },
//   create: function() {

//   }
//  };
// module.exports = mongoose.model('Blog', BlogSchema);
// define out blog model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Blog', {
  title: { type: String, default: 'Title' },
  author: { type: String, default: 'Ian Aebel'}, 
  body: { type: String, default: 'Title'},
  tags: [Tag],
  date: { type: Date, default: Date.now },
  hidden: Boolean
});