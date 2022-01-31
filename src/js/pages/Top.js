import React, {useState} from "react";
import {Link} from "react-router-dom"
import Todo from "../components/todo"

const Top = () => {

  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [counter, setCounter] = useState(1)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'First todo item.',
      completed: false,
      removed: false
    }
  ])

  const addTodo = (value) => {
    // @Todo: validation here
    if (value === '') {
      alert('Please enter some text.')
      return
    }

    // count up index
    const count = counter + 1

    // set new item
    setTodos(todos => [...todos, {
      id: count,
      title: value,
      completed: false,
      removed: false,
    }])

    // update states
    setCounter(count)
    setNewTodoTitle('') // clear
  }


  const completeTodoToggle = (id) => {
    setTodos(todos => todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
    }))
  }

  const removeTodo = (id) => {
    // remove specific item
    setTodos(todos.filter(todo => {
      return todo.id !== id
    }))
  }

  const changeTodoTitle = (id, title) => {
    setTodos(todos => todos.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }

      return todo
    }))
  }

  return (
    <div class="container" style={{marginTop: "60px"}}>
      <div class="row">
        <div class="col-lg-12">
          <h1>Todo</h1>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-lg-12">
          <div className="form-inline">
            <div className="form-group">
              <input type="text"
                     className="form-control mr-3"
                     id="newTodoForm"
                     value={newTodoTitle}
                     onChange={(e) => setNewTodoTitle(e.target.value)}
              />
              <button type="button"
                      className="btn btn-primary mr-1"
                      onClick={() => addTodo(newTodoTitle)}
              >
                Add New Item
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="mr-lg-2 p-4 bg-light h-100">
            <h2>Remained Tasks</h2>
            {todos.map(todo => (
              !todo.completed
              &&
              <Todo todo={todo}
                    key={todo.id}
                    completeTodoToggle={completeTodoToggle}
                    removeTodo={removeTodo}
                    changeTodoTitle={changeTodoTitle}
              />
            ))}
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="ml-lg-2 p-4 bg-light h-100">
            <h2>Completed</h2>
            {todos.map(todo => (
              todo.completed
              &&
              <Todo todo={todo}
                    key={todo.id}
                    completeTodoToggle={completeTodoToggle}
                    removeTodo={removeTodo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top