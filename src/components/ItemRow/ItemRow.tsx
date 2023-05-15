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
    const { id, amount, name, expirationDate, price, category, weight, ean } = item

    const handleClickEdit = () => setViewMode(ViewMode.Edit)
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

    return (
        <div className='item-row__wrapper'>
            { (viewMode === ViewMode.View) ?
                // View mode
                <>
                    <span className='item-row__amount'>{amount}</span>
                    <span>{name}</span>
                    <span>Val.: {formattedExpirationDate}</span>
                    <span>{formattedPrice}</span>
                    <span>{category}</span>
                    <span>{weight} g</span>
                    <span>{ean}</span>
                    <div>
                        <button onClick={handleClickEdit}><i className='fa-solid fa-pen-to-square' /></button>
                        <button><i className='fa-solid fa-trash' /></button>
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
                    <button onClick={handleClickSave}>Save</button>
                </>
            }
        </div>
    )
}

export default ItemRow
