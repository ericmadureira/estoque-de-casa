import React, { useState } from 'react'

import { Item } from '../types/Item'
import mockItemList from '../mockItems'

import './ItemManagementPage.css'


const ItemManagementPage = () => {
    const [itemList, setItemList] = useState<Item[]>(mockItemList)
    const handleAddNewItem = () => {
        let newList = [...itemList]
        newList.push({
            id: 'hudbhfjd',
            name: 'novo item',
            amount: 1,
            expirationDate: ',22/12/2022',
            price: 44,
            category: 'generic',
            weight: 200,
        })
        setItemList(newList)
    }

    return (
        <div className='item-mgmt-page__page-wrapper'>
            <h1>Lista de itens</h1>
            <button onClick={handleAddNewItem}>Add</button>
            <div className='item-mgmt-page__list-wrapper'>
                {
                    itemList.map(item => (
                        <div key={item.id} className='item-mgmt-page__item-wrapper'>
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
