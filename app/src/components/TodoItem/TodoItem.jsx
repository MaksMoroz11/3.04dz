import { useState } from 'react'
import styles from './TodoItem.module.css'

function TodoItem({ task, onDelete, onEditF, onToggleComplete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)

  const handleOk = () => {
    if (editText.trim() !== '') {
      onEditF(task.id, editText)
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditText(task.text)
    setIsEditing(false)
  }

  return (
    <>
      <div className={styles.todoItem}>
        <div
          className={`${styles.taskText} ${task.completed ? styles.completed : ''}`}
          onClick={() => onToggleComplete(task.id)}
        >
          {task.text}
        </div>
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => setIsEditing(true)}
            className={styles.editButton}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className={styles.deleteButton}
          >
            Удалить
          </button>
        </div>
      </div>

      {isEditing && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className={styles.modalInput}
            />
            <div className={styles.modalButtons}>
              <button
                onClick={handleCancel}
                className={styles.cancelButton}
              >
                Cancel
              </button>
              <button
                onClick={handleOk}
                className={styles.okButton}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TodoItem