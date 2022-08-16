import React, { useState, useEffect } from 'react'
import { collection, query, onSnapshot, addDoc } from 'firebase/firestore'
import { firebaseApp } from '../firebase'
import { useNavigate } from 'react-router-dom'

import AddItem from '../components/AddItem'
import { Item, ItemCreationParams } from '../types/Item'

import './ItemManagementPage.css'


const ItemManagementPage = () => {
    const [itemList, setItemList] = useState<Item[]>([])
    const [searchInput, setSearchInput] = useState<string>('')
    const navigate = useNavigate()

    const handleAddNewItem = async (itemCreationParams: ItemCreationParams) => {
        try {
            await addDoc(collection(firebaseApp, 'products'), { ...itemCreationParams })
            navigate('/')
        } catch (err) {
            console.log('Error during fetch: ', err)
        }
    }

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setSearchInput(event.target.value)
    }

    // Brings all products from DB
    useEffect(() => {
        const q = query(collection(firebaseApp, 'products'))
        onSnapshot(q, (querySnapshot) => {
            setItemList(
                querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() } as Item
                })
            )
        })
    }, [])

    return (
        <div className='item-mgmt-page__page-wrapper'>
            <h1>Estoque atual</h1>
            <AddItem handleAddNewItem={handleAddNewItem} />
            <div className='item-mgmt-page__search-wrapper'>
                <span className='item-mgmt-page__search-wrapper'>Filtrar: </span>
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
