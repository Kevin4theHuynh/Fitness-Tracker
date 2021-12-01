const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 4000;
const path = require('path');
const User = require("./schema")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout_db',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

// Routes to the page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, ".//Develop/public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/stats.html"));
});

app.post("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/stats.html"));
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})