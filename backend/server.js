const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const chalk = require('chalk');

require('dotenv').config();

// Server running
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection Via mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log(
    chalk.green.inverse('MongoDB connection established successfully')
  );
});

// Port
app.listen(port, () => {
  console.log(chalk.blue.bold.inverse(`Server is running on ${port}`));
});
