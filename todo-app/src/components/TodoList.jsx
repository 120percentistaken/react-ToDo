import { TodoCard } from "./TodoCard"
export function TodoList(props){
    const { todos, selectedTab } = props
    
    //checking the tab to filter todos
    const filterTodosList = selectedTab ==='All' ? 
    todos: selectedTab === 'Finished' ? 
    todos.filter(val => val.finished) : todos.filter(val => !val.finished);

    return(
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return(
                    <TodoCard 
                    key ={todoIndex}
                    todoIndex ={todoIndex}
                    {...props}
                    todo={todo}/>
                )
            })}

        </>
    )
}