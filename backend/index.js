const express = require('express');
const app = express();

app.use(express.json())

const PORT = 3000;


app.get('/todos',(req,res)=>{
    res.status(200).send("welcome")
});


/* req body
{
    "title":string,
    "description":string
}

*/
app.post('/create',(req,res)=>{
    let todo = req.body.todo;
    console.log("Todo : "+todo);
    res.status(204).send('created');
});

/* req 
    /markdone/todoid
*/
app.put('/markdone',(req,res)=>{
    let todoid = req.query.todoid;
    console.log(todoid);
    res.status(200).send('done')
})



app.listen(PORT,()=>console.log(`App listening on ${PORT}`));