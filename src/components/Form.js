import React, {useEffect} from "react";
import {v4 as uuidv4} from "uuid"

const Form = ({ input, setInput, todo, setTodo, editTodo, setEditTodo }) => {

    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const updateTodo = (title, id,completed) => {
        const newTodos = todo.map((todos) => 
            todos.id === id ? {title, id, completed} : todos
        )
        setTodo(newTodos)
        setEditTodo("")
    }
    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title)
        }else{
            setInput("")
        }
    }, [setInput, editTodo])

    const onFormSubmit = (event) => {
        event.preventDefault()
        if(!editTodo){
            setTodo([...todo, {id: uuidv4(), title: input, completed: false }])
            setInput("")
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
        
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                className="from-input-todo" 
                placeholder="Enter a todo..." 
                value={input} 
                onChange={onInputChange} 
                required 
            />
            <button className="button-add" type="submit">
                {editTodo ? "Ok" : "Add"}
            </button>
        </form>
    )
}
export default Form;