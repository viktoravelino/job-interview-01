require('dotenv').config();
const { json } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { applicants } = require('./routes/applicants');
const cors = require('cors');

app.use(json());
app.use(cors());
app.use('/api', applicants);

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('mongo connected');
  } catch (error) {
    console.log('Error connecting mongo');
  }

  app.listen(4000, () => {
    console.log('Server listening on http://localhost:4000');
  });
}

main();
