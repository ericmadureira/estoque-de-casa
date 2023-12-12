import React, { useState } from 'react'

import { currencyFormatOptions, deserializeDate, serializeDate } from '../../helpers/formatting'
import { updateItem } from '../../services/item-data'
import { Item } from '../../types/Item'

import './ItemRow.css'

interface ItemRowProps {
    item: Item
}
enum ViewMode {
    View = 'view',
    Edit = 'edit',
}

const ItemRow = ({ item }: ItemRowProps) => {
    // Props
    const { id, amount, name, expirationDate, price, category, weight, ean } = item

    // State
    const [viewMode, setViewMode] = useState(ViewMode.View)
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

    const formattedPrice = price.toLocaleString('pt-BR', currencyFormatOptions)
    const formattedExpirationDate = serializeDate(expirationDate.seconds).toLocaleDateString('pt-BR')

    // Methods
    const handleClickEdit = () => setViewMode(ViewMode.Edit)
    const handleClickCancel = () => setViewMode(ViewMode.View)
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
        setViewMode(ViewMode.View)
    }

    // Render
    return (
        <div className='item-row__wrapper'>
            { (viewMode === ViewMode.View) ?
                // View mode
                <>
                    <span style={{ width: 55, marginRight: 16, textAlign: 'left' }}>{amount} un.</span>
                    <span style={{ display: 'flex', textWrap: 'wrap', textAlign: 'left', flexGrow: 4 }}>{name}</span>
                    {/* TO-DO: Tornar a unidade dinâmica */}
                    {/* <span>{weight} g</span> */}
                    <div style={{ display: 'flex' }}>
                        {/* TO-DO: adicionar tooltip aos botões */}
                        <button style={{ marginRight: '4px' }} className='item-action-button' onClick={handleClickEdit}><i className='fa-solid fa-pen-to-square' /></button>
                        <button className='item-action-button'><i className='fa-regular fa-circle-xmark' /></button>
                    </div>
                </> :
                // Edit mode
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
            }
        </div>
    )
}

export default ItemRow
