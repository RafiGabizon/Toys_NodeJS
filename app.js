const express = require('express');
const mongoose = require('mongoose');
const toysRouter = require('./routes/toys');

const app = express();


mongoose.connect('mongodb://localhost/toys', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use('/api/toys', toysRouter);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
