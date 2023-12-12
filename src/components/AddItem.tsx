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

    // State
    const [formItemName, setFormItemName] = useState<string>('')
    const [formItemAmount, setFormItemAmount] = useState<number>(0)
    const [formItemPrice, setFormItemPrice] = useState<number>(0.0)
    const [formItemcategory, setFormItemcategory] = useState<string>('')
    const [formItemWeight, setFormItemWeight] = useState<number>(0)
    const [formItemExpirationDate, setFormItemExpirationDate] = useState<string>('')
    const [formItemEAN, setFormItemEANEAN] = useState<string>('')

    // Methods
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button style={{ marginRight: 8 }} onClick={() => setIsFormOpen(!isFormOpen)}><i className='fa-solid fa-barcode' /></button>
            <button style={{ marginRight: 8 }} onClick={() => setIsFormOpen(!isFormOpen)}><i className='fa-solid fa-plus' /></button>
        </div>
    )
}

export default AddItem
