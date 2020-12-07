
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3002;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
// var notes = [
//   {
//     id: 0,
//     title: "yoda yoda yoda",
//     text: "Yoda yoda yoda"
//   },
//   {
//     id: 1,
//     title: "yoda yoda yoda",
//     text: "Yoda yoda yoda"
//   },
//   {
//     id: 1,
//     title: "yoda yoda yoda",
//     text: "Yoda yoda yoda"
//   }
// ];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "index.html"));
  // return res.send( "Welcome");
});

app.get("/notes", function (req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "notes.html"));
  // return res.send( "Welcome");
});


// Displays all characters
// app.get("/api/notes", function(req, res) {
  // return res.json(characters);
// });

// Displays a single character, or returns false
app.get("/api/notes/:id", function(req, res) {
  var chosen = req.params.id;

  console.log(chosen);
  for (var i = 0; i < notes.length; i++) {
    if (chosen === notes[i]) {
      return res.json(notes[i]);
    }
  }
  return res.json(false);
});


// Create New Characters - takes in JSON input
app.post("/api/notes", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var notes = req.body;

  console.log(notes);

  // We then add the json the user sent to the character array
  characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
