import React, { useState } from 'react'

import { Item } from '../types/Item'
import mockItemList from '../mockItems'

import './ItemManagementPage.css'


const ItemManagementPage = () => {
    const [itemList, setItemList] = useState<Item[]>(mockItemList)
    return (
        <div className='item-mgmt-page__page-wrapper'>
            <h1>Lista de itens</h1>
            <button>Add</button>
            <div className='item-mgmt-page__list-wrapper'>
                {
                    itemList.map(item => (
                        <div className='item-mgmt-page__item-wrapper'>
                            <div>name: {item.name}</div>
                            <div>amount: {item.amount}</div>
                            <div>expirationDate: {item.expirationDate}</div>
                            <div>price: R${item.price}</div>
                            <div>category: {item.category}</div>
                            <div>weight: {item.weight} g</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemManagementPage
