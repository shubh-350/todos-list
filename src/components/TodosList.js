import React from 'react'

const TodosList = ({todos, handleDelete, handleEdit, handleComplete}) => {
  return (
    <ul className="allTodos">
          {todos.map((t) => (
            <li className="singleTodo">
              <span className="todoText" key={t.id}>
                {t.todo}
              </span>
              <button onClick={() => handleComplete(t.id)}> Complete </button>
              <button onClick={() => handleEdit(t.id)}> Edit </button>
              <button onClick={() => handleDelete(t.id)}> Delete </button>
            </li>
          ))}
        </ul>
  )
}

export default TodosList