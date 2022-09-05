const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/BLOGDB');

const userSchema=new mongoose.Schema({
   title:{
     type:String,
     required:true
   },
   description:{
    type:String,
    required:true
   },
   createdAt:{
    type:Date,
    default:Date.now
   }

});
module.exports = mongoose.model('User', userSchema);