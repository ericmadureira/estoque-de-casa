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
                <summary style={{ marginBottom: 8}}>Recorrentes</summary>
                <div className='container' style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
                        <input type='checkbox' />
                        <input type='number' style={{ height: 30, margin: '0 8px 0 0', padding: '8px 6px', width: 60 }}/>
                        Manga
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
                        <input type='checkbox' />
                        <input type='number' style={{ height: 30, margin: '0 8px 0 0', padding: '8px 6px', width: 60 }}/>
                        Pêra
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
                        <input type='checkbox' />
                        <input type='number' style={{ height: 30, margin: '0 8px 0 0', padding: '8px 6px', width: 60 }}/>
                        Banana
                    </span>
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
            <button
                data-tooltip='Adiciona os itens selecionados ao estoque'
                data-placement='bottom'
            >
                <i className='fa-solid fa-cart-plus' />
                <span style={{ marginLeft: 8 }}>Concluir compra</span>
            </button>
        </div>
    )
}

export default ShoppingListPage
