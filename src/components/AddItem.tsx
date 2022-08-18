import React, { useState } from 'react'
import { Timestamp } from 'firebase/firestore'

import { ItemCreationParams } from '../types/Item'


interface AddItemProps {
    handleAddNewItem: (itemCreationParams: ItemCreationParams) => Promise<void>
}

const AddItem = ({ handleAddNewItem }: AddItemProps) => {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false)

    // State for Item form
    const [formItemName, setFormItemName] = useState<string>('')
    const [formItemAmount, setFormItemAmount] = useState<number>(0)
    const [formItemPrice, setFormItemPrice] = useState<number>(0.0)
    const [formItemcategory, setFormItemcategory] = useState<string>('')
    const [formItemWeight, setFormItemWeight] = useState<number>(0)
    const [formItemExpirationDate, setFormItemExpirationDate] = useState<string>('')

    const handleAddButtonClick = () => {
        setIsFormOpen(!isFormOpen)
        handleAddNewItem({
            name: formItemName,
            amount: formItemAmount,
            price: formItemPrice,
            category: formItemcategory,
            weight: formItemWeight,
            expirationDate: Timestamp.fromDate(new Date(formItemExpirationDate)),
        })
    }

    return (
        <div className='add-item__wrapper'>
            { isFormOpen
                ? (<button onClick={() => handleAddButtonClick()} className='add-item__add-button'>Salvar</button>)
                : (<button onClick={() => setIsFormOpen(!isFormOpen)} className='add-item__add-button'>Adicionar item</button>)
            }
            { isFormOpen && (
                <div className='add-item__inputs-wrapper'>
                    <input onChange={(e) => setFormItemName(e.target.value)} value={formItemName} type='text' placeholder='Nome' />
                    <input onChange={(e) => setFormItemAmount(Number(e.target.value))} value={formItemAmount} type='number' placeholder='Qtde' min={0} />
                    <input onChange={(e) => setFormItemPrice(Number(e.target.value))} value={formItemPrice} type='number' placeholder='Preço (R$)' min={0} />
                    <input onChange={(e) => setFormItemcategory(e.target.value)} value={formItemcategory} type='text' placeholder='Categoria' />
                    <input onChange={(e) => setFormItemWeight(Number(e.target.value))} value={formItemWeight} type='number' placeholder='Peso (g)' min={0} />
                    <input onChange={(e) => setFormItemExpirationDate(e.target.value)} value={formItemExpirationDate} type='datetime-local' placeholder='Validade' />
                </div>
            )}
        </div>
    )
}

export default AddItem
