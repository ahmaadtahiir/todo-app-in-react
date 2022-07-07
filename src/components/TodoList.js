import React from "react";
import completeIcon from "../assets/completeIcon.png";
import deleteIcon from "../assets/deleteIcon.png";
import editIcon from "../assets/editIcon.png";

const TodoList = ({ todo, setTodo, setEditTodo }) => {

    const handleComplete = (todos) => {
        setTodo(
            todo.map((item) => {
                if (item.id === todos.id) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })
        )
    }

    const handleEdit = ({ id }) => {
        const findTodo = todo.find((todos) => todos.id === id)
        setEditTodo(findTodo)
    }

    const handleDetele = ({ id }) => {
        setTodo(todo.filter((todos) => todos.id !== id))
    }

    return (
        <div>
            {todo.map((todos) => (
                <li className="todo-list" key={todos.id}>
                    <input
                        type="text"
                        value={todos.title}
                        className={`list ${todos.completed} ? "Completed" : ""`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button
                            className="button-completed"
                            onClick={() => handleComplete(todos)}>
                                <img src={completeIcon}/>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button
                            className="button-edit task-button"
                            onClick={() => handleEdit(todos)}>
                            <img src={editIcon}/>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button
                            className="button-delete task-button"
                            onClick={() => handleDetele(todos)}>
                                <img src={deleteIcon}/>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}
export default TodoList