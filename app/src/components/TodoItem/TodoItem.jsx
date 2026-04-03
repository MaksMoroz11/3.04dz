function TodoItem({ task, onDelete }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        marginBottom: '8px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        border: '1px solid #ddd'
      }}
    >
      <span>{task.text}</span>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          padding: '4px 12px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        Удалить
      </button>
    </div>
  )
}

export default TodoItem