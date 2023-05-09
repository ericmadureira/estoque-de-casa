import React, { useEffect, useRef, useState } from 'react'
import { Timestamp } from 'firebase/firestore'

import { ItemCreationParams } from '../types/Item'


interface AddItemProps {
    handleAddNewItem: (itemCreationParams: ItemCreationParams) => Promise<void>
}

const AddItem = ({ handleAddNewItem }: AddItemProps) => {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        isFormOpen && inputRef.current?.focus()
    }, [isFormOpen])

    // State for Item form
    const [formItemName, setFormItemName] = useState<string>('')
    const [formItemAmount, setFormItemAmount] = useState<number>(0)
    const [formItemPrice, setFormItemPrice] = useState<number>(0.0)
    const [formItemcategory, setFormItemcategory] = useState<string>('')
    const [formItemWeight, setFormItemWeight] = useState<number>(0)
    const [formItemExpirationDate, setFormItemExpirationDate] = useState<string>('')
    const [formItemEAN, setFormItemEANEAN] = useState<string>('')

    const handleAddButtonClick = () => {
        setIsFormOpen(!isFormOpen)
        handleAddNewItem({
            amount: formItemAmount,
            name: formItemName,
            price: formItemPrice,
            category: formItemcategory,
            weight: formItemWeight,
            expirationDate: Timestamp.fromDate(new Date(formItemExpirationDate)),
            ean: formItemEAN,
        })
    }

    return (
        <div className='add-item__wrapper'>
            { isFormOpen
                ? <>
                    <button onClick={() => handleAddButtonClick()} className='add-item__add-button'>Salvar</button>
                    <button onClick={() => setIsFormOpen(!isFormOpen)} className='add-item__add-button'>Cancelar</button>
                </>
                : <button onClick={() => setIsFormOpen(!isFormOpen)} className='add-item__add-button'>Adicionar item</button>
            }
            { isFormOpen && (
                <div className='add-item__inputs-wrapper'>
                    <input onChange={(e) => setFormItemAmount(Number(e.target.value))} value={formItemAmount} type='text' placeholder='Qtde' />
                    <input onChange={(e) => setFormItemName(e.target.value)} value={formItemName} type='text' placeholder='Nome' ref={inputRef} />
                    <input onChange={(e) => setFormItemPrice(Number(e.target.value))} value={formItemPrice} type='text' placeholder='Preço (R$)' />
                    <input onChange={(e) => setFormItemcategory(e.target.value)} value={formItemcategory} type='text' placeholder='Categoria' />
                    <input onChange={(e) => setFormItemWeight(Number(e.target.value))} value={formItemWeight} type='text' placeholder='Peso (g)' />
                    <input onChange={(e) => setFormItemExpirationDate(e.target.value)} value={formItemExpirationDate} type='datetime-local' placeholder='Validade' />
                    <input onChange={(e) => setFormItemEANEAN(e.target.value)} value={formItemEAN} type='text' placeholder='EAN (código de barra)' />
                </div>
            )}
        </div>
    )
}

export default AddItem
