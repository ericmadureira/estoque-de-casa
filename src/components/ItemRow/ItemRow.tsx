import React from 'react'
import { currencyFormatOptions, expirationDateFormatter } from '../../helpers/formatting'

import { Item } from '../../types/Item'

import './ItemRow.css'

interface ItemRowProps {
    item: Item
}

const ItemRow = ({ item }: ItemRowProps) => {
    const { name, amount, expirationDate, price, weight } = item
    return (
        <div className='item-row__wrapper'>
            <span className='item-row__amount'>{amount}</span>
            <b>{name}</b>

            {/* validade será escondida */}
            <span>
                <>
                    Val.: {expirationDateFormatter(expirationDate.seconds)}
                </>
            </span>

            {/* preço será escondido */}
            <span>{price.toLocaleString('pt-BR', currencyFormatOptions)}</span>
            <span>{weight} g</span>
            <span><i className='fa-solid fa-flask-vial' /></span>
        </div>
    )
}

export default ItemRow
