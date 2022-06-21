import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState ([])
  const [editTodo, setEditTodo] = (null)
  return (
    <div className='app-container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
          <Form
            input = {input}
            setInput = {setInput}
            todo = {todo}
            setTodo = {setTodo}
            editTodo = {editTodo}
            setEditTodo = {setEditTodo}
          />
          <TodoList 
            todo = {todo}
            setTodo = {setTodo}
            setEditTodo = {setEditTodo}
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
