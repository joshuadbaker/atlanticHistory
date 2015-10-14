angular.module('AtlanticHistory').factory('Blog', function($resource) {
  return $resource('/api/blogs/:id', {id: '@_id'}, {
    update: {
      method: "PUT",
    },
  });
});

// angular.module('AtlanticHistory').factory('Blog', ['$http', function($http) {
//   return {
//     // call to get all blogs
//     get : function() {
//       return $http.get('/api/blogs');
//     },

//     // these will work when I build out API routes on the Node/Express side of stack
//     // call to POST and create new blog
//     create : function(blogData) {
//       return $http.post('/api/blogs', blogData);
//     },

//     // call to DELETE a blog
//     delete : function(id) {
//       return $http.delete('/api/blogs/' + id);
//     }
//   }

// }]);