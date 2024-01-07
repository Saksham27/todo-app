const express = require('express');
const cors = require('cors')
const {createTodo, markDoneOrDelete} = require('./types');
const { todo } = require('./db');

const app = express();
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))
const PORT = 3000;

app.get('/todos',async (req,res)=>{
    try {
        const todos = await todo.find({
            isDeleted: false
        });
        return res.status(200).json({
            msg:"success",
            data:todos
        })
    } catch (error) {
        console.log("Error : "+error);
        return res.status(500).json({
            msg:"something went wrong",
           error: error.toString()
        });
    }
});


app.post('/create',async (req,res)=>{
    const createPayload = req.body;

    const parsedPayload = createTodo.safeParse(createPayload); // validate request
    if(!parsedPayload.success){
        return res.status(411).json({
            msg: "invalid input"
        })
    }

    try { // save in database
        const createdtodo = await todo.create({
            title:createPayload.title,
            description: createPayload.description,
            isDone : false,
            isDeleted: false,
            createdAt: Date.now(),
            updatedAt: null,
            deletedAt: null
        })
        return res.status(200).json({
                msg:"success",
                data: createdtodo._id
            });
    } catch (error) {
        console.log("Error : "+error);
        return res.status(500).json({
            msg:"something went wrong",
           error: error.toString()
        });
    }
});

app.put('/markdone/:todoid',async (req,res)=>{
    const reqTodoid = req.params.todoid;
    const parsedTodoid = markDoneOrDelete.safeParse(reqTodoid); // validate request
    if(!parsedTodoid.success){
        return res.status(411).json({
            msg:"invalid todo id format"
        })
    }

    try {
        await todo.findOneAndUpdate({
            _id: reqTodoid
        },{
            isDone: true,
            updatedAt : Date.now()
        })

    } catch (error) {
        console.log("Error : "+error);
        return res.status(500).json({
            msg:"something went wrong",
           error: error.toString()
        });

    }

    return res.status(200).json({
        msg:`${reqTodoid} is marked done`,
        data: reqTodoid
    })
})

app.delete('/delete/:todoid',async (req,res)=>{
    const reqTodoid = req.params.todoid;
    const parsedTodoid = markDoneOrDelete.safeParse(reqTodoid);
    if(!parsedTodoid.success){
        return res.status(411).json({
            msg:"invalid todo id format"
        }) 
    }

    try {
        await todo.findOneAndUpdate({
            _id: reqTodoid
        },{
            isDeleted: true,
            deletedAt : Date.now()
        })

    } catch (error) {
        console.log("Error : "+error);
        return res.status(500).json({
            msg:"something went wrong",
           error: error.toString()
        });

    }
    return res.status(200).json({
        msg:`${reqTodoid} is deleted`,
        data: reqTodoid
    })
})



app.listen(PORT,()=>console.log(`App listening on ${PORT}`));