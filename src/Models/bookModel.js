const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  author: {
    type:String,
    required:true
  },
  summary:{
    type:String,
    required:true
  },
  isDeleted:{
    type:Boolean,
    default:false
  },
},{timestamps:true});

module.exports  = mongoose.model('Book', bookSchema);
