import { useState } from 'react'

export default function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    onAdd(inputValue)
    setInputValue('')
  }

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите задачу..."
        style={{
          flex: 1,
          padding: '8px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: '8px 16px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        OK
      </button>
    </div>
  )
}