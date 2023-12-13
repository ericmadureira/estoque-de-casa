import React, { useState } from 'react'
import { deserializeDate, serializeDate } from '../helpers/formatting'
import { Item } from '../types/Item'
import { updateItem } from '../services/item-data'

interface ItemEditModalProps {
  isEditModalOpen: boolean
  selectedItem: Item
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface ModalInputProps {
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number
}
const ModalInput = ({ label, onChange, value }: ModalInputProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
      <span>{label}: </span>
      <input onChange={onChange} style={{ margin: '0 0 0 16px', width: 215 }} type='text' value={value} />
    </div>
  )
}

const ItemEditModal = ({ isEditModalOpen, selectedItem, setIsEditModalOpen }: ItemEditModalProps): JSX.Element => {
  // Props
  const {
    id, amount: currentAmount, name: currentName,
    expirationDate: currentExpirationDate, price: currentPrice,
    category: currentCategory, weight: currentWeight, ean: currentEAN } = selectedItem

  // State
  const [amount, setAmount] = useState<number>(currentAmount)
  const [name, setName] = useState<string>(currentName)
  const [expirationDate, setExpirationDate] = useState<string>(
    serializeDate(currentExpirationDate.seconds).toLocaleDateString('en-US'))
  const [price, setPrice] = useState<number>(currentPrice)
  const [category, setCategory] = useState<string>(currentCategory)
  const [weight, setWeight] = useState<number>(currentWeight)
  const [EAN, setEAN] = useState<string>(currentEAN)

  // Methods
  const handleClickCancel = () => setIsEditModalOpen(false)
  const handleClickSave = async () => {
    await updateItem({ id, amount: amount, name: name, expirationDate: deserializeDate(expirationDate),
      price: price, category: category, weight: weight, ean: EAN })
    setIsEditModalOpen(false)
  }

  return (
    <dialog open={isEditModalOpen}>
      <article>
        <header style={{ marginBottom: 16}}>
          <a href="#close" aria-label="Close" className="close" onClick={handleClickCancel}></a>
          <span>Editando </span><b>{currentName}</b>
        </header>

        {/* Inputs */}
        <ModalInput label='Quant.' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAmount(Number(e.target.value)) }} value={amount} />
        <ModalInput label='Nome' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} value={name} />
        <ModalInput label='Validade' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setExpirationDate(e.target.value) }} value={expirationDate} />
        <ModalInput label='Preço' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPrice(Number(e.target.value)) }} value={price} />
        <ModalInput label='Categoria' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setCategory(e.target.value) }} value={category} />
        <ModalInput label='Peso' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setWeight(Number(e.target.value)) }} value={weight} />
        <ModalInput label='EAN' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEAN(e.target.value) }} value={EAN} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button style={{ width: '50%', marginRight: 16 }} onClick={handleClickSave}>Salvar</button>
          <button style={{ width: '50%', backgroundColor: '#FF6A74' }} onClick={handleClickCancel}>Cancelar</button>
        </div>
      </article>
    </dialog>
  )
}

export default ItemEditModal
