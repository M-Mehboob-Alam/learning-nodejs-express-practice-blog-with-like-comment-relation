const mongoose = require('mongoose');

const comment = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Comment', comment);