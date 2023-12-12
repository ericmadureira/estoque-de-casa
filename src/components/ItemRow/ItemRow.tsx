import React from 'react'

import { Item } from '../../types/Item'

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
        setIsEditModalOpen(true)
        setSelectedItem(item)
    }

    return (
        <div className='item-row__wrapper'>
            <span style={{ width: 55, marginRight: 16, textAlign: 'left' }}>{amount} un.</span>
            <span style={{ display: 'flex', textWrap: 'wrap', textAlign: 'left', flexGrow: 4 }}>{name}</span>
            {/* TO-DO: Tornar a unidade dinâmica */}
            {/* <span>{weight} g</span> */}
            <div style={{ display: 'flex' }}>
                {/* TO-DO: adicionar tooltip aos botões */}
                <button style={{ marginRight: '4px' }} className='item-action-button' onClick={handleClickEdit}><i className='fa-solid fa-pen-to-square' /></button>
                <button className='item-action-button'><i className='fa-regular fa-circle-xmark' /></button>
            </div>
        </div>
    )
}

export default ItemRow
