import React, { useState } from 'react'

import { Item } from '../types/Item'


const ItemManagementPage = () => {
    const [itemList, setItemList] = useState<Item[]>([])
    return (
        <div>
            <h1>Lista de itens</h1>
            <button>Add</button>
            <div>
                {
                    itemList.map(item => (
                        <div className='item-wrapper'>
                            <div>{item.name}</div>
                            <div>{item.amount}</div>
                            <div>{item.expirationDate}</div>
                            <div>{item.price}</div>
                            <div>{item.category}</div>
                            <div>{item.weight}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemManagementPage
