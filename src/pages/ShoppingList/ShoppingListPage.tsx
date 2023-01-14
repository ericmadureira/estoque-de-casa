import React, { useState } from 'react'

import { Item } from '../../types/Item'

import './ShoppingListPage.css'

const ShoppingListPage = () => {
    const [shoppingList, setShoppingList] = useState<Item[]>([])
    const [itemName, setItemName] = useState('')
    const addShoppingListItem = () => {
        setShoppingList([...shoppingList, {
            id: itemName,
            name: itemName,
            amount: 1,
            expirationDate: { seconds: 1, nanoseconds: 1 },
            price: 1,
            category: 'default',
            weight: 1,
        }])
    }

    return (
        <div className='shopping-list-page__page-wrapper'>
            <h1>Shopping List page</h1>

            <div className='shopping-list-page__inputs-wrapper'>
                <input type='text' value={itemName} onChange={(event) => setItemName(event.target.value)} />
            </div>

            <button
                style={{ width: '80px' }}
                onClick={addShoppingListItem}
            >
                Adicionar item
            </button>

            <div className='shopping-list-page__list-wrapper'>
                <ol>
                    { shoppingList.map(item =>
                        <li key={item.name}>
                            <span style={{ marginRight: '10px' }}>id: {item.id}</span>
                            <span style={{ marginRight: '10px' }}>{item.name}</span>
                            <button onClick={() => setShoppingList(shoppingList.filter(item => item.name !== itemName))}> X </button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default ShoppingListPage
