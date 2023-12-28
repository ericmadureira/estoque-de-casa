import React, { useState } from 'react'

import { Item } from '../types/Item'

const ShoppingListPage = () => {
    const suggestedShoppingDate = new Date().toLocaleDateString('pt-BR', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
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
            <p>{suggestedShoppingDate}</p>
            <details open>
                <summary>Recorrentes: </summary>
                <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
                    <span><input type='checkbox' /> Manga</span>
                    <span><input type='checkbox' /> Pêra</span>
                    <span><input type='checkbox' /> Banana</span>
                </div>
            </details>
            <details>
                <summary>Somente essa vez: </summary>
                <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
                    <span><input type='checkbox' /> Pão</span>
                    <span><input type='checkbox' /> Queijo</span>
                    <span><input type='checkbox' /> Presunto</span>
                </div>
            </details>
        </div>
    )
}

export default ShoppingListPage
