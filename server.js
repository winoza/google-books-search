const express = require('express');
const path = require("path");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

// Connect to the MongoDB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/google-books-search',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
