export function TodoCard(props){
    
    const { todo, editTodo, deleteTodo, todoIndex } = props
  


    return(
        <div className = "card todo-item">
            <p>{todo.input}</p>
                <div className="todo-buttons">
                    <button onClick= {() => editTodo(todoIndex)} disabled={todo.finished}>
                        <h6>Done</h6>
                    </button>
                     <button onClick={() => deleteTodo(todoIndex)}>
                        <h6>Delete</h6>
                    </button>
                </div>
        </div>
    )
}