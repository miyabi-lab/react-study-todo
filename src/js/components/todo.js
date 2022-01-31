import React from "react"

const Todo = ({todo, removeTodo, completeTodoToggle, changeTodoTitle}) => {
  return (
    <div>
      <div className="form-inline mb-2">
        <div className="form-group">
          {/*<label htmlFor="inputPassword2" className="sr-only">Password</label>*/}
          <div className="mr-3"
               style={{width: 32}}
          >
            #{todo.id}
          </div>
          <input type="text" 
                 className="form-control mr-3" 
                 defaultValue={todo.title} 
                 disabled={todo.completed ? 'disabled' : false} 
                 onBlur={(e) => changeTodoTitle(todo.id, e.target.value)}
          />
          <button type="button" 
                  className={'btn mr-1 ' + (todo.completed ? 'btn-secondary' : 'btn-success')} 
                  onClick={() => completeTodoToggle(todo.id)}
          >
            {todo.completed ? 'Incompleted' : 'Completed'}
          </button>
          <button type="button" 
                  className="btn btn-danger" 
                  onClick={() => removeTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo