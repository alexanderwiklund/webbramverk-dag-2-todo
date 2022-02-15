import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [id, setId] = useState(0)
  const incrementCounter = () => {
    setId((previousValue) => previousValue + 1)
  }

  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([])
  const addTodo = () => {
    console.log(title)
    const newTodo = {
      id: id,
      title: title,
      description: 'Ha en bra dag!'
    }
    setTodos([...todos, newTodo])
    incrementCounter()
  }
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
        <label>Title<input value={title} onChange={(event) => {
          setTitle(event.target.value)
        }} /></label>
        <label>Description<input onChange={() => {
          //Vad kan vi göra för att koppla denna input till description? :)
        }} /></label>
        <button onClick={addTodo}>ADD TODO</button>
      </div>
      {todos.map(({id, title, description}) => {
        return <Todo key={id} id={id} title={title} description={description} onDelete={deleteTodo} />
      })}
    </div>
  );
}

export default App;
