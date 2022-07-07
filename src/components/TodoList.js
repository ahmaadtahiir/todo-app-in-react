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
                        <img
                            src={completeIcon} className="completeIcon"
                            onClick={() => handleComplete(todos)}
                        />
                        <img
                            src={editIcon} className="editIcon"
                            onClick={() => handleEdit(todos)}
                        />
                        <img
                            src={deleteIcon} className="deleteIcon"
                            onClick={() => handleDetele(todos)}
                        />
                    </div>
                </li>
            ))}
        </div>
    )
}
export default TodoList