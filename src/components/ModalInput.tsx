import React from 'react'

interface ModalInputProps {
  autoFocus?: boolean
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number
  inputFormat: 'number' | 'text' | 'date'
}
const ModalInput = ({ autoFocus, inputFormat, label, onChange, value }: ModalInputProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
      <span>{label}: </span>
      <input onChange={onChange} style={{ margin: '0 0 0 16px', width: 215 }} type={inputFormat} value={value} autoFocus={autoFocus} />
    </div>
  )
}

export default ModalInput
