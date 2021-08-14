import React from 'react'

function ToDoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.todo.completed}/>
            <p>{props.todo.text}</p>
        </div>
    )
}

export default ToDoItem