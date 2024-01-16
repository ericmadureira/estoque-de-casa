import React from 'react'

import { Item } from '../types/Item'

import './ItemRow.css'

interface ItemRowProps {
    item: Item
    setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedItem: React.Dispatch<React.SetStateAction<Item>>
}

const ItemRow = ({ item, setIsEditModalOpen, setSelectedItem }: ItemRowProps) => {
    // Props
    const { amount, name } = item

    // Methods
    const handleClickEdit = () => {
        setSelectedItem(item)
        setIsEditModalOpen(true)
    }

    return (
        <div className='item-row__wrapper'>
            <span style={{ width: 55, marginRight: 16, textAlign: 'left' }}>{amount} un.</span>
            <span style={{ display: 'flex', textWrap: 'wrap', textAlign: 'left', flexGrow: 4 }}>{name}</span>
            <div style={{ display: 'flex' }}>
                <button
                    style={{ marginRight: 8, padding: '2px 6px' }}
                    data-tooltip='Editar'
                    data-placement='left'
                    onClick={handleClickEdit}
                >
                    {/* Edit */}
                    <i className='fa-solid fa-pen-to-square' />
                </button>
                <button
                    data-tooltip='Zerar quantidade'
                    data-placement='left'
                    style={{ padding: '2px 6px' }}
                >
                    {/* Set amount to zero */}
                    <i className='fa-regular fa-circle-xmark' />
                </button>
            </div>
        </div>
    )
}

export default ItemRow
