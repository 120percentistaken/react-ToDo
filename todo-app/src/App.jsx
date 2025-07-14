import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/ToDoList"

//useState is a React hook that lets you add state to functional components
//useful managing dynamic or interactive data in your app

//useEffect is a react hook for tracking events

function App() {
 
  const [todos, setTodos] = useState([
    {input: 'Learn React', finished: true},
  ])
// array destructuring to extract todos and setTodos from useState
  const [selectedTab, setSelectedTab] = useState('Open')

  function addTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, finished: false}]
    setTodos(newTodoList)
    saveTodo(newTodoList)
  }
//update or modify the state of todos
  function editTodo(index) {
    let newTodo = [...todos]
    let finishedTodo = todos[index]
    finishedTodo['finished'] = true
    newTodo[index] = finishedTodo
    setTodos(newTodo)
    saveTodo(newTodo)
  }

  function deleteTodo(index) {
    let newTodo = todos.filter((val, todoIndex) => {return todoIndex !== index})
    setTodos(newTodo)
    saveTodo(newTodo)
  }

function saveTodo(currentTodo){
  localStorage.setItem('todo-app', JSON.stringify({currentTodo}))
}
//invoking useEffect
//telling it as soon as the page is available
// Check if localStorage is available
    
  useEffect(() => {
    //protective clause
    if (!localStorage || !localStorage.getItem('todo-app')){
      return
    }
    console.log('here')
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
    
  }, [])
  
  return (
<>
  
  <Header todos={todos}/>
  <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
  <TodoList saveTodo = {saveTodo} editTodo = {editTodo}deleteTodo={deleteTodo} selectedTab={selectedTab}todos={todos}/>
  <TodoInput addTodo={addTodo}/>

</>
  )
}

export default App
