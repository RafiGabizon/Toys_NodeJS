const mongoose = require('mongoose');

const toySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  info: String,
  category: String,
  img_url: String,
  price: Number,
  date_created: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Toy = mongoose.model('Toy', toySchema);

module.exports = Toy;
