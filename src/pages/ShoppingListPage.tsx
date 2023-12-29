import React, { useState } from 'react'

import { Item } from '../types/Item'

interface ShoppingItemProps {
    item: Item
}

const recurringItems = [{
    id: 'example1',
    name: 'Manga',
    amount: 1,
    expirationDate: { seconds: 1, nanoseconds: 1 },
    price: 1,
    category: 'default',
    weight: 1,
    ean: '11101010253196',
},
{
    id: 'example2',
    name: 'Pêra',
    amount: 1,
    expirationDate: { seconds: 1, nanoseconds: 1 },
    price: 1,
    category: 'default',
    weight: 1,
    ean: '444010253196',
},
{
    id: 'example3',
    name: 'Banana',
    amount: 1,
    expirationDate: { seconds: 1, nanoseconds: 1 },
    price: 1,
    category: 'default',
    weight: 1,
    ean: '3245253196',
}]

const ShoppingListPage = () => {
    // Mock
    const suggestedShoppingDate = new Date().toLocaleDateString('pt-BR', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })

    // State
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

    // UI
    const ShoppingItem = ({ item }: ShoppingItemProps): JSX.Element => (
        <span style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
            <input type='checkbox' value={item.amount} />
            <input type='number' style={{ height: 30, margin: '0 8px 0 0', padding: '8px 6px', width: 60 }}/>
            {item.name}
        </span>
    )

    return (
        <div className='container'>
            <p>{suggestedShoppingDate}</p>
            <details open>
                <summary style={{ marginBottom: 8}}>Recorrentes</summary>
                <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
                    {/* TO-DO: Abstract logic to another component */}
                    {recurringItems.map(item => <ShoppingItem key={item.id} item={item} />)}
                </div>
            </details>
            <details>
                <summary style={{ marginBottom: 8}}>Somente essa vez</summary>
                <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
                    <span><input type='checkbox' /> Pão</span>
                    <span><input type='checkbox' /> Queijo</span>
                    <span><input type='checkbox' /> Presunto</span>
                </div>
            </details>
            {/* TO-DO: add "select all" button */}
            <button
                data-tooltip='Adiciona os itens selecionados ao estoque'
                data-placement='bottom'
            >
                <i className='fa-solid fa-cart-plus' />
                {/* TO-DO: ellaborate update logic */}
                <span style={{ marginLeft: 8 }}>Concluir compra</span>
            </button>
        </div>
    )
}

export default ShoppingListPage
