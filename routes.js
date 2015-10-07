// app/routes.js
var express = require('express');
var router = express.Router();
// grab the blogblog. model we just created
var Blog = require('./models/blog');

// server routes --------------------------------

// middleware to use for all requests
router.use(function(req, res, next) {
  console.log('it is working!!!')
  next();
});
// Test route for the API
router.get('/', function(req, res) {
  res.json({ message: "hooray! Welcome to Ian's API!" });
});

// router.post('/blogs', function(req, res) {
//   var blog = new Blog();
//     blog.title = req.body.title;
//     blog.author = req.body.author;
//     blog.body = req.body.body;
//     blog.comments = req.body.comments;
//     blog.date = req.body.date;
    
//     // save the blog instance and check for errors
//     blog.save(function(err) {
//       if(err)
//         res.send(err);
//       res.json({ message: 'Blog created!' });
//     });
//   console.log("hello postman!");
// });

// route for creating blog (app.post)
router.route('/blogs')
  .post(function(req, res, next) {
    // var blog = new Blog();
    // blog.title = req.body.title;
    // blog.author = req.body.author;
    // blog.body = req.body.body;
    // blog.comments = req.body.comments;
    // blog.date = req.body.date;
    
    // // save the blog instance and check for errors
    // blog.save(function(err) {
    //   if(err)
    //     res.send(err);
    //   res.json({ message: 'Blog created!' });
    // });
    console.log("hello postman!");
    // next();
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