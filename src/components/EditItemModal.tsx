import React, { useState } from 'react'

import { deserializeDate, serializeDate } from '../helpers/formatting'
import ModalInput from './ModalInput'
import { Item, ItemUpdateParams } from '../types/Item'

interface EditItemModalProps {
  handleUpdateItem: (itemUpdateParams: ItemUpdateParams) => Promise<void>
  selectedItem: Item
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const EditItemModal = ({ handleUpdateItem, selectedItem, setIsEditModalOpen }: EditItemModalProps): JSX.Element => {
  // State
  const [amount, setAmount] = useState<number>(selectedItem.amount)
  const [name, setName] = useState<string>(selectedItem.name)
  const [expirationDate, setExpirationDate] = useState<string>(
    serializeDate(selectedItem.expirationDate.seconds).toISOString().split('T')[0])
  const [price, setPrice] = useState<number>(selectedItem.price)
  const [category, setCategory] = useState<string>(selectedItem.category)
  const [weight, setWeight] = useState<number>(selectedItem.weight)
  const [EAN, setEAN] = useState<string>(selectedItem.ean)

  // Methods
  const handleClickCancel = () => setIsEditModalOpen(false)
  const handleClickSave = async () => {
    await handleUpdateItem({ id: selectedItem.id, amount, name: name, expirationDate: deserializeDate(expirationDate),
      price: price, category: category, weight: weight, ean: EAN })
  }

  return (
    <dialog open>
      <article>
        <header style={{ marginBottom: 16}}>
          <a href="#close" aria-label="Close" className="close" onClick={handleClickCancel}></a>
          <span>Editando </span><b>{selectedItem.name}</b>
        </header>

        {/* Inputs */}
        <ModalInput label='Quant.' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAmount(Number(e.target.value)) }} value={amount} />
        <ModalInput label='Nome' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} value={name} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <span>Validade: </span>
          <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setExpirationDate(e.target.value) }}
            style={{ margin: '0 0 0 16px', width: 215 }} type='date' value={expirationDate} />
        </div>
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

export default EditItemModal
