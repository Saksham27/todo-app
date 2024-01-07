export function Todos({todos}){
    return <div>
        {todos.map(todo=>{
            return <>
            <div className="todo">
                <div>{todo.title}</div>
        <div>{todo.description}</div>
                </div>
        <button>{todo.isDone ? "Done" : "Mark as Done"}</button>
            </>
        })}
        
    </div>
}