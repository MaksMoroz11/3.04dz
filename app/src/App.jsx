import { useState } from 'react'
import TodoInput from './components/TodoInput/TodoInput'
import TodoItem from './components/TodoItem/TodoItem'
import styles from './App.module.css'

export default function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    if (text.trim() === '') return

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ))
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className={styles.container}>
      <h1>Мой Todo List</h1>

      <TodoInput onAdd={addTask} />

      <div className={styles.tasksContainer}>
        {tasks.length === 0 ? (
          <p className={styles.emptyMessage}>Пока нет задач</p>
        ) : (
          tasks.map(task => (
            <TodoItem
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onEditF={editTask}
              onToggleComplete={toggleComplete}
            />
          ))
        )}
      </div>
    </div>
  )
}