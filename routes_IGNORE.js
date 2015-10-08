// // app/routes.js
// var express = require('express');
// var router = express.Router();
// // grab the blogblog. model we just created
// var Blog = require('./models/blog');

// // server routes --------------------------------

// // middleware to use for all requests
// router.use(function(req, res, next) {
//   console.log('it is working!!!')
//   next();
// });
// // Test route for the API
// router.get('/', function(req, res) {
//   res.json({ message: "hooray! Welcome to Ian's API!" });
// });

// // routes for '/blogs'
// router.route('/blogs')
//   .post(function(req, res, next) {
//     var blog = new Blog();
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
//     console.log("hello postman!");
//   })
//   .get(function(req, res) {
//     Blog.find(function(err, blogs) {
//       if(err)
//         res.send(err);
//       res.json(blogs);
//       console.log('getting blogs!')
//     });
//   });

// // route for /bears/:blog_id
// router.route('/blogs/:blog_id')
//   .get(function(req, res) {
//     Blog.findById(req.params.blog_id, function(err, blog) {
//       if(err)
//         res.send(err);
//       res.json(blog);
//     });
//   })
//   .put(function(req, res) {
//     Blog.findById(req.params.blog_id, function(err, blog) {
//       if(err)
//       res.send(err);
//       // updates the selected blog info
//       blog.title = req.body.title;
//       blog.author = req.body.author;
//       blog.body = req.body.body;

//       // persist updates to blog
//       blog.save(function(err) {
//         if(err)
//           res.send(err);
//         res.json({ message: 'Blog updated!'});
//       });
//     });
//   })
//   .delete(function(req, res) {
//     Blog.remove({
//       _id: req.params.blog_id
//     }, function(err, blog) {
//       if(err)
//         res.send(err);
//       res.json({ message: 'Successfully deleted'});
//     });
//   });






// module.exports = router;