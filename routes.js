// app/routes.js
var express = require('express');
var router = express.Router();
// grab the nerd model we just created
var Blog = require('./models/blog');

// server routes --------------------------------
router.get('/', function(req, res) {
  res.json({ message: "hooray! Welcome to Ian's API!" });
});
  // handle api calls
  // authentication routes

  // sample api route
//   app.get('/api/blogs', function(req, res) {
    
//     // use mongoose to get all blogs in the database
//     Blog.find(function(err, blogs) {
//       // if there is an error retrieving, send the error.
//       // nothing after res.send(err) will execute
//       if(err)
//         res.send(err);

//       res.json(blogs);
//     });
//   });

//   // route for creating blog (app.post)
//   app.post('/api/blogs', function(req, res) {
//     Blog.create({
//       title: req.body.title,
//       author: req.body.author,
//       body: req.body.body,
//       coments: req.body.comments,
//       date: req.body.date
//     }, function(err, blog) {
//       if(err)
//         res.send(error);
//       // not sure if this works, but trying to display blog just created
//       Blog.find(function(err, blog) {
//         if(err)
//           res.send(err);
//         res.json(blog);
//       })
//     });
//   });

//   // route for updating a blog

//   // route for deleting blog (app.delete)
//   app.delete('/api/todos/:todo_id', function(req, res) {
//     Blog.remove({
//       _id: req.params.todo_id
//     }, function(err, blog) {
//       if(err)
//         res.send(err);
//       Blog.find(function(err, blogs) {
//         if(err)
//           res.send(error);
//         response.json(blogs);
//       });
//     });
//   });

//   // frontend routes --------------------------------
//   // route to handle all angular requests
  // app.get('*', function(req, res) {
  //   res.sendfile('./public/index.html');  // load out public.html file
  // });

module.exports = router;