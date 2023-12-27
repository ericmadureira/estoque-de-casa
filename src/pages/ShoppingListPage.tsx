import React, { useState } from 'react'

import { Item } from '../types/Item'

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
            ean: '7891010253196',
        }])
    }

    return (
        <div className='container'>
            <h1 style={{ marginBottom: 16 }}>Lista de compra</h1>

            <span>Recorrentes: </span>
            <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
                <span><input type='checkbox' /> Manga</span>
                <span><input type='checkbox' /> Pêra</span>
                <span><input type='checkbox' /> Banana</span>
            </div>

            <hr />

            <span>Somente essa vez: </span>
            <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
                <span><input type='checkbox' /> Pão</span>
                <span><input type='checkbox' /> Queijo</span>
                <span><input type='checkbox' /> Presunto</span>
            </div>
        </div>
    )
}

export default ShoppingListPage
