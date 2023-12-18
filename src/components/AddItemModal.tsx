import React, { useEffect, useRef, useState } from 'react'
import { Timestamp } from 'firebase/firestore'

import ModalInput from './ModalInput'
import { ItemCreationParams } from '../types/Item'

interface AddItemModal {
    handleAddNewItem: (itemCreationParams: ItemCreationParams) => Promise<void>
    setIsAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddItemModal = ({ handleAddNewItem, setIsAddModalOpen }: AddItemModal) => {
    // State
    const [amount, setAmount] = useState<number>(1)
    const [name, setName] = useState<string>('')
    const [expirationDate, setExpirationDate] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [category, setCategory] = useState<string>('')
    const [weight, setWeight] = useState<number>(0)
    const [EAN, setEAN] = useState<string>('')

    // Methods
    const handleClickCancel = () => setIsAddModalOpen(false)
    const handleClickSave = async () => {
        await handleAddNewItem({
            amount,
            name,
            price,
            category,
            weight,
            expirationDate: Timestamp.fromDate(new Date(expirationDate)),
            ean: EAN,
        })
        setIsAddModalOpen(false)
    }

    return (
        <dialog open>
            <article>
                <header style={{ marginBottom: 16}}>
                    <a href="#close" aria-label="Close" className="close" onClick={handleClickCancel}></a>
                    <b>Novo item</b>
                </header>

                {/* Inputs */}
                <ModalInput label='Quant.' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAmount(Number(e.target.value)) }} value={amount} autoFocus />
                <ModalInput label='Nome' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} value={name} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <span>Validade: </span>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setExpirationDate(e.target.value) }} style={{ margin: '0 0 0 16px', width: 215 }} type='date' value={expirationDate} />
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

export default AddItemModal
