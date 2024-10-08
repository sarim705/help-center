require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const cardRoutes = require('./routes/cards');

const app = express();
const port =  5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => console.error(err));

app.use(express.json());
app.use('/cards', cardRoutes);

app.get('/ping', (req, res) => {
  res.send('My Server is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
