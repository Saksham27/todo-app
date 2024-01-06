const express = require('express');
const {createTodo, markDoneOrDelete} = require('./types');

const app = express();
app.use(express.json())
const PORT = 3000;

app.get('/todos',(req,res)=>{
    res.status(200).send("welcome")
});


app.post('/create',(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg: "invalid input"
        })
        return;
    }
    // save in mongo
    console.log("Todo : "+todo);
    res.status(204).send('created');
});

app.put('/markdone/:todoid',(req,res)=>{
    const reqTodoid = req.params.todoid;
    const parsedTodoid = markDoneOrDelete.safeParse(reqTodoid);
    if(!parsedTodoid.success){
        return res.status(411).json({
            msg:"invalid todo id format"
        })
        return;
    }
    console.log(reqTodoid);
    res.status(200).send('done')
})

app.delete('/delete/:todoid',(req,res)=>{
    const reqTodoid = req.params.todoid;
    const parsedTodoid = markTodoDone.safeParse(reqTodoid);
    if(!parsedTodoid.success){
        return res.status(411).json({
            msg:"invalid todo id format"
        }) 
        return;
    }
    console.log(reqTodoid);
    res.status(200).send('done')
})



app.listen(PORT,()=>console.log(`App listening on ${PORT}`));