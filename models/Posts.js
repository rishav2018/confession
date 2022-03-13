const  mongoose = require('mongoose');
const { Schema } = mongoose;

const PostsSchema = new Schema({
    title : String,
    confession : String,
    likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    date:{ type: Date, default: Date.now }
})
const Posts = mongoose.model('Posts',PostsSchema)
module.exports = Posts