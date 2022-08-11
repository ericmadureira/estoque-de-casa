import React, { useState } from 'react'

interface AddItemProps {
    handleAddNewItem: () => void
}

const AddItem = ({ handleAddNewItem }: AddItemProps) => {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false)

    const handleButtonClick = () => {
        handleAddNewItem()
        setIsFormOpen(!isFormOpen)
    }

    return (
        <div className='add-item__wrapper'>
            <button
                onClick={handleButtonClick}
                className='add-item__add-button'
            >
                { isFormOpen ? 'Salvar' : 'Adicionar produto' }
            </button>
            { isFormOpen && (
                <div className='add-item__inputs-wrapper'>
                    <input type='text' placeholder='name' />
                    <input type='number' placeholder='amount' min={0} />
                    <input type='datetime-local' placeholder='expirationDate' />
                    <input type='number' placeholder='price' min={0} />
                    <input type='text' placeholder='category' />
                    <input type='number' placeholder='weight' min={0} />
                </div>
            )}
        </div>
    )
}

export default AddItem
