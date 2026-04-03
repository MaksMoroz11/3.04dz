import { useState } from 'react'
import TodoInput from './components/TodoInput/TodoInput'
import TodoItem from './components/TodoItem/TodoItem'

export default function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    if (text.trim() === '') return

    const newTask = {
      id: Date.now(),
      text: text
    }
    
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h1>Мой Todo List</h1>
      
      <TodoInput onAdd={addTask} />
      
      <div style={{ marginTop: '20px' }}>
        {tasks.length === 0 ? (
          <p style={{ color: '#888' }}>Пока нет задач</p>
        ) : (
          tasks.map(task => (
            <TodoItem 
              key={task.id} 
              task={task} 
              onDelete={deleteTask} 
            />
          ))
        )}
      </div>
    </div>
  )
}