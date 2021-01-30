// Requiring our models
var db = require("../models");

module.exports = function (app) {
  /*  // GET route for getting all of the posts
    app.get("/api/posts", function(req, res) {
      var query = {};
      if (req.query.author_id) {
        query.AuthorId = req.query.author_id;
      }
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Author
      db.Post.findAll({
        where: query,
        include: [db.Author]
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });
  
    // Get route for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
      // Here we add an "include" property to our options in our findOne query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Author
      db.Post.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Author]
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });
  
    // POST route for saving a new post */
  app.post("/api/chore", function (req, res) {
    db.Chores.create(req.body).then(function (dbChore) {
      res.json(dbChore);
    });
  });

  // DELETE route for deleting posts
  // app.delete("/api/chore/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbdelete) {
  //     res.json(dbdelete);
  //   });
  // });

  // PUT route for updating posts
  app.put("/api/chore/:id", function (req, res) {
    console.log("REQ BODY: ", req.body);
    console.log("REQ PARAMS: ", req.params);
    db.Chores.update(
      req.body,
      {
        completed: 1,
      },
      {
        
        where: {
          id: req.params.id,
        },
      }
    ).then(function (dbPut) {
      res.json(dbPut);
    });
  });
};
