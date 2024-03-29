const mongoose= require('mongoose')

const taskSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    day:{
        type:String,
        required:true
    },
    completion:{
        type:Boolean,
        required:true,
        default:false
    }

},{timestamps:true});

const Task = mongoose.model('Task',taskSchema)
module.exports= Task
