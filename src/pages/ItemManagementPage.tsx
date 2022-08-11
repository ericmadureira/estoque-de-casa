import React, { useState, useEffect } from 'react'
import { collection, query, onSnapshot } from 'firebase/firestore'
import { firebaseApp } from '../firebase'

import { Item } from '../types/Item'

import './ItemManagementPage.css'


const ItemManagementPage = () => {
    const [itemList, setItemList] = useState<Item[]>([])
    const [searchInput, setSearchInput] = useState<string>('')

    const handleAddNewItem = () => {
        let newList = [...itemList]
        newList.push({
            id: 'hudbhfjd',
            name: 'novo item',
            amount: 1,
            expirationDate: { seconds: 1660060689, nanoseconds: 586000000 },
            price: 44,
            category: 'generic',
            weight: 200,
        })
        setItemList(newList)
    }

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setSearchInput(event.target.value)
    }

    useEffect(() => {
        const q = query(collection(firebaseApp, 'products'))
        onSnapshot(q, (querySnapshot) => {
            setItemList(
                querySnapshot.docs.map(doc => {
                    const item = { id: doc.id, ...doc.data() } as Item
                    return item
                })
            )
        })
    }, [])

    return (
        <div className='item-mgmt-page__page-wrapper'>
            <h1>Lista de itens</h1>
            <button onClick={handleAddNewItem}>Add</button>
            <div className='item-mgmt-page__search-wrapper'>
                <span className='item-mgmt-page__search-wrapper'>Search: </span>
                <input
                    className='item-mgmt-page__search-wrapper'
                    type="text"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />
            </div>
            <div className='item-mgmt-page__list-wrapper'>
                {
                    itemList
                        .filter((item: Item) => item.name.toLowerCase().includes(searchInput))
                        .map((item: Item) => (
                            <div key={item.id} className='item-mgmt-page__item-wrapper'>
                                <div>name: {item.name}</div>
                                <div>amount: {item.amount}</div>
                                <div>expirationDate: {item.expirationDate.seconds}</div>
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
