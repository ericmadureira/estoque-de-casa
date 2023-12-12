import React, { useState } from 'react'
import { deserializeDate, serializeDate } from '../helpers/formatting'
import { Item } from '../types/Item'
import { updateItem } from '../services/item-data'

interface ItemEditModalProps {
  isEditModalOpen: boolean
  selectedItem: Item
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ItemEditModal = ({ isEditModalOpen, selectedItem, setIsEditModalOpen }: ItemEditModalProps): JSX.Element => {
  // Props
  const { id, amount, name, expirationDate, price, category, weight, ean } = selectedItem

  // State
  const [editFormItemAmount, setEditFormItemAmount] = useState<number>(amount)
  const [editFormItemName, setEditFormItemName] = useState<string>(name)
  const [editFormItemExpirationDate, setEditFormItemExpirationDate] = useState<string>(
      serializeDate(expirationDate.seconds)
          .toLocaleDateString('en-US')
  )
  const [editFormItemPrice, setEditFormItemPrice] = useState<number>(price)
  const [editFormItemcategory, setEditFormItemcategory] = useState<string>(category)
  const [editFormItemWeight, setEditFormItemWeight] = useState<number>(weight)
  const [editFormItemEAN, setEditFormItemEAN] = useState<string>(ean)

  // Methods
  const handleClickCancel = () => setIsEditModalOpen(false)
  const handleClickSave = async () => {
    await updateItem({
        id,
        amount: editFormItemAmount,
        name: editFormItemName,
        expirationDate: deserializeDate(editFormItemExpirationDate),
        price: editFormItemPrice,
        category: editFormItemcategory,
        weight: editFormItemWeight,
        ean: editFormItemEAN,
    })
    setIsEditModalOpen(false)
  }

  return (
    <dialog open={isEditModalOpen}>
      <article>
          <header>
            <a href="#close" aria-label="Close" className="close" onClick={handleClickCancel}></a>
            <span>Editando </span><span style={{ fontWeight: 'bold' }}>{name}</span>
          </header>
          <>
          <input onChange={(e) => setEditFormItemAmount(Number(e.target.value))} value={editFormItemAmount} type='text' />
            <input onChange={(e) => setEditFormItemName(e.target.value)} value={editFormItemName} type='text' />
            <input onChange={(e) => setEditFormItemExpirationDate(e.target.value)} value={editFormItemExpirationDate} type='date' />
            <input onChange={(e) => setEditFormItemPrice(Number(e.target.value))} value={editFormItemPrice} type='text' />
            <input onChange={(e) => setEditFormItemcategory(e.target.value)} value={editFormItemcategory} type='text' />
            <input onChange={(e) => setEditFormItemWeight(Number(e.target.value))} value={editFormItemWeight} type='text' />
            <input onChange={(e) => setEditFormItemEAN(e.target.value)} value={editFormItemEAN} type='text' />
            <div>
                <button onClick={handleClickSave}>Salvar</button>
                <button onClick={handleClickCancel}>Cancelar</button>
            </div>
          </>
      </article>
    </dialog>
  )
}

export default ItemEditModal
