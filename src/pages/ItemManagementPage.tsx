import React, { useState, useEffect } from 'react'
import { collection, query, onSnapshot, addDoc } from 'firebase/firestore'
import { firebaseApp } from '../firebase'
import { useNavigate } from 'react-router-dom'

import AddItem from '../components/AddItem'
import ItemRow from '../components/ItemRow'
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

    // Fetches all items from DB
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
            <AddItem handleAddNewItem={handleAddNewItem} />
            <div className='item-mgmt-page__search-wrapper'>
                <input
                    className='item-mgmt-page__search-input'
                    type="text"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    placeholder='Filtrar...'
                />
            </div>
            <div className='item-mgmt-page__list-wrapper'>
                {
                    itemList
                        .filter((item: Item) => item.name.toLowerCase().includes(searchInput))
                        .map((item: Item) => <ItemRow key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default ItemManagementPage
