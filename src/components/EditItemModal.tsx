import React, { useState } from 'react'

import { formatDateBeforeSave, formatDateFromDatabase } from '../helpers/formatting'
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
  const [expirationDate, setExpirationDate] = useState<string>(formatDateFromDatabase(selectedItem.expirationDate.seconds))
  const [price, setPrice] = useState<number>(selectedItem.price)
  const [category, setCategory] = useState<string>(selectedItem.category)
  const [weight, setWeight] = useState<number>(selectedItem.weight)
  const [EAN, setEAN] = useState<string>(selectedItem.ean)

  // Methods
  const handleClickCancel = () => setIsEditModalOpen(false)
  const handleClickSave = async () => {
    // TO-DO: add toast with success or error
    await handleUpdateItem({ id: selectedItem.id, amount, name: name, expirationDate: formatDateBeforeSave(expirationDate),
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
        <ModalInput label='Quant.' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAmount(Number(e.target.value)) }} value={amount} inputFormat='number' autoFocus/>
        <ModalInput label='Nome' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} inputFormat='text' value={name} />
        <ModalInput label='Validade' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setExpirationDate(e.target.value) }} value={expirationDate} inputFormat='date' />
        <ModalInput label='Preço' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPrice(Number(e.target.value)) }} inputFormat='number' value={price} />
        <ModalInput label='Categoria' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setCategory(e.target.value) }} inputFormat='text' value={category} />
        <ModalInput label='Peso' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setWeight(Number(e.target.value)) }} inputFormat='number' value={weight} />
        <ModalInput label='EAN' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEAN(e.target.value) }} inputFormat='text' value={EAN} />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button style={{ width: '50%', marginRight: 16 }} onClick={handleClickSave}>Salvar</button>
          <button style={{ width: '50%', backgroundColor: '#FF6A74' }} onClick={handleClickCancel}>Cancelar</button>
        </div>
      </article>
    </dialog>
  )
}

export default EditItemModal
