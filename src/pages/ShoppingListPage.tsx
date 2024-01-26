import React, { useState } from 'react'

import { Item } from '../types/Item'

interface ShoppingListItemProps {
    item: Item
}

const mockRecurringItems = [{
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

const mockSingleItems = [{
    id: 'example4',
    name: 'Pão de forma',
    amount: 2,
    expirationDate: { seconds: 1, nanoseconds: 1 },
    price: 6,
    category: 'default',
    weight: 400,
    ean: '75276',
},
{
    id: 'example5',
    name: 'Queijo mussarela',
    amount: 1,
    expirationDate: { seconds: 1, nanoseconds: 1 },
    price: 6,
    category: 'default',
    weight: 400,
    ean: '47273575',
},
{
    id: 'example6',
    name: 'Torta de banana',
    amount: 2,
    expirationDate: { seconds: 1, nanoseconds: 1 },
    price: 1,
    category: 'default',
    weight: 1,
    ean: '5655343',
}]

const ShoppingListItem = ({ item }: ShoppingListItemProps): JSX.Element => (
    <span style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
        <input type='checkbox' value={item.amount} />
        <input type='number' style={{ height: 30, margin: '0 8px 0 0', padding: '8px 6px', width: 60 }}/>
        {item.name}
    </span>
)

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

    return (
        <div className='container'>
            <p>{suggestedShoppingDate}</p>
            <details open>
                <summary style={{ marginBottom: 8}}>Recorrentes</summary>
                <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
                    {/* TO-DO: Abstract logic to another component */}
                    {mockRecurringItems.map(item => <ShoppingListItem key={item.id} item={item} />)}
                </div>
            </details>
            <details open>
                <summary style={{ marginBottom: 8}}>Somente essa vez</summary>
                <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
                    {mockSingleItems.map(item => <ShoppingListItem key={item.id} item={item} />)}
                </div>
            </details>
            {/* TO-DO: add "select all" button */}
            <button
                data-tooltip='Adiciona os itens selecionados ao estoque'
                data-placement='bottom'
            >
                <i className='fa-solid fa-cart-plus' />
                {/* TO-DO: implement "finish shopping list" logic */}
                <span style={{ marginLeft: 8 }}>Concluir compra</span>
            </button>
        </div>
    )
}

export default ShoppingListPage
