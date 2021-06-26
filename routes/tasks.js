const express= require('express');
const router= express.Router();
const Task=require('../models/tasks')


router.get('/',(req,res) =>{
    Task.find({}).sort({createdAt:-1}).then((task) => {res.send(task)}).catch((err) => {console.log(err)})
})

 router.patch('/:id',async(req,res) =>{

    const id = req.params.id
    const updates=req.body
    const result= await Task.findByIdAndUpdate(id,updates)
    res.send(result)
    })

    router.get('/:id',(req,res) =>{
        Task.findById(req.params.id).then((task) => {res.send(task)}).catch((err) => {console.log(err)})
    })

 


router.post('/',(req,res) =>{

    const task= new Task(req.body)

    task.save()
        .then((result) => res.send(result))
        .catch((err) => {console.log(err)})

})




router.delete('/:id',(req,res) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id)
    .then(result =>{
        res.json({redirect: '/tasks'})
    })
    .catch((err) => {console.log(err)})

})

module.exports = router