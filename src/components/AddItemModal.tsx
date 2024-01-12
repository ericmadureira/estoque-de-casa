import React, { useState } from 'react'
import { Timestamp } from 'firebase/firestore'

import ModalInput from './ModalInput'
import { ItemCreationParams } from '../types/Item'

interface AddItemModal {
    handleAddNewItem: (itemCreationParams: ItemCreationParams) => Promise<void>
    setIsAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddItemModal = ({ handleAddNewItem, setIsAddModalOpen }: AddItemModal) => {
    // State
    // TO-DO: try to reuse logic for both add and edit modals
    const [amount, setAmount] = useState<number>(1)
    const [name, setName] = useState<string>('Meu produto')
    const [expirationDate, setExpirationDate] = useState<string>('')
    const [price, setPrice] = useState<number>(1)
    const [category, setCategory] = useState<string>('Padrão')
    const [weight, setWeight] = useState<number>(1)
    const [EAN, setEAN] = useState<string>('000000')

    // Methods
    const handleClickCancel = () => setIsAddModalOpen(false)
    // TO-DO: add toast with success or error
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
                <ModalInput label='Quant.' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAmount(Number(e.target.value)) }} value={amount} inputFormat='number' autoFocus />
                <ModalInput label='Nome' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} value={name} inputFormat='text' />
                <ModalInput label='Validade' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setExpirationDate(e.target.value) }} value={expirationDate} inputFormat='date' />
                <ModalInput label='Preço' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPrice(Number(e.target.value)) }} value={price} inputFormat='number' />
                {/* TO-DO: Implement "categories and dropdown" logic */}
                <ModalInput label='Categoria' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setCategory(e.target.value) }} value={category} inputFormat='text' />
                <ModalInput label='Peso' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setWeight(Number(e.target.value)) }} value={weight} inputFormat='number' />
                <ModalInput label='EAN' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEAN(e.target.value) }} value={EAN} inputFormat='text' />

                {/* Buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button style={{ width: '50%', marginRight: 16 }} onClick={handleClickSave}>Salvar</button>
                    <button style={{ width: '50%', backgroundColor: '#FF6A74' }} onClick={handleClickCancel}>Cancelar</button>
                </div>
            </article>
        </dialog>
    )
}

export default AddItemModal
