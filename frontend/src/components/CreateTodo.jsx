import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const changeTitle = (e)=>{
        setTitle(e.target.value)
    }

    const changeDescription = (e)=>{
        setDescription(e.target.value)
    }

    function Create(){
        const req = {
            title: title,
            description: description
        }

        fetch("http://localhost:3000/create",{
            method: "POST",
            body: JSON.stringify(req),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(async res=>{
            const json = await res.json();
            alert(json.msg);
        })
        .catch(err=>{
            console.log(err)
            alert(err)
        })
    }

    return <div>
        <input style={{
            padding: 10,
            magrin: 10
        }} type="text" name="title" id="title" onChange={changeTitle} /> <br />
        <input style={{
            padding: 10,
            magrin: 10
        }} type="text" name="desc" id="desc" onChange={changeDescription}/> <br />

        <button style={{
            padding: 10,
            magrin: 10
        }} onClick={Create}>Add a Todo</button>
    </div>
};