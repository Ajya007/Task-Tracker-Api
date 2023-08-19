const express = require('express');
const mongoose= require("mongoose")
const app = express();
const uri = 'mongodb+srv://test123:test123@test.njvkj.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
const con =mongoose.connection
con.on('open' , function(){
    console.log('connected')
})

var cors = require('cors')
app.use(cors())

const tasks =require('./routes/tasks');

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/tasks',tasks)



const port =process.env.PORT || 5000;

app.listen(port)







