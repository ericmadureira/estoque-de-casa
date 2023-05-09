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
    const { amount, name, expirationDate, price, weight, ean } = item

    const handleClickEdit = () => setViewMode(ViewMode.Edit)
    }

    const [viewMode, setViewMode] = useState(ViewMode.View)
    const [editFormItemAmount, setEditFormItemAmount] = useState<number>(amount)
    const [editFormItemName, setEditFormItemName] = useState<string>(name)
    const [editFormItemExpirationDate, setEditFormItemExpirationDate] = useState<string>(serializeDate(expirationDate.seconds))
    const [editFormItemPrice, setEditFormItemPrice] = useState<number>(price)
    // const [editFormItemcategory, setEditFormItemcategory] = useState<string>('')
    const [editFormItemWeight, setEditFormItemWeight] = useState<number>(weight)
    const [editFormItemEAN, setEditFormItemEAN] = useState<string>(ean)

    return (
        <div className='item-row__wrapper'>
            { (viewMode === ViewMode.View) ?
                // View mode
                <>
                    <span className='item-row__amount'>{amount}</span>
                    <b>{name}</b>
                    <span>Val.: {serializeDate(expirationDate.seconds)}</span>
                    <span>{price.toLocaleString('pt-BR', currencyFormatOptions)}</span>
                    <span>{weight} g</span>
                    <span>{ean}</span>
                    <button onClick={handleClickEdit}><i className='fa-solid fa-pen-to-square' /></button>
                </> :
                // Edit mode
                <>
                    <input onChange={(e) => setEditFormItemAmount(Number(e.target.value))} value={editFormItemAmount} type='number' min={0} />
                    <input onChange={(e) => setEditFormItemName(e.target.value)} value={editFormItemName} type='text' />
                    <input onChange={(e) => setEditFormItemExpirationDate(e.target.value)} value={editFormItemExpirationDate} type='datetime-local' />
                    <input onChange={(e) => setEditFormItemPrice(Number(e.target.value))} value={editFormItemPrice} type='number' min={0} />
                    {/* <input onChange={(e) => setFormItemcategory(e.target.value)} value={formItemcategory} type='text' /> */}
                    <input onChange={(e) => setEditFormItemWeight(Number(e.target.value))} value={editFormItemWeight} type='number' min={0} />
                    <input onChange={(e) => setEditFormItemEAN(e.target.value)} value={editFormItemEAN} type='text' />
                    <button onClick={handleClickEdit}>SAVE</button>
                </>
            }
        </div>
    )
}

export default ItemRow
