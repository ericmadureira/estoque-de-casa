import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import AddItem from '../../components/AddItem'
import ItemRow from '../../components/ItemRow/ItemRow'
import { addNewItem, getAllItems } from '../../services/item-data'
import { Item, ItemCreationParams } from '../../types/Item'

import './ItemManagementPage.css'


const ItemManagementPage = () => {
    const [itemList, setItemList] = useState<Item[]>([])
    const [searchInput, setSearchInput] = useState<string>('')
    const navigate = useNavigate()

    const handleAddNewItem = async (itemCreationParams: ItemCreationParams) => {
        await addNewItem(itemCreationParams)
        navigate('/')
    }

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setSearchInput(event.target.value)
    }

    useEffect(() => {
        // Fetches all items from db/direbase.
        getAllItems().then(items => setItemList(items))
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
            <div className='list-header'>
                <span>Quant.</span>
                <span>Nome</span>
                <span>Validade</span>
                <span>Preço</span>
                <span>Peso</span>
                <span>EAN</span>
                <span>Ações</span>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                {
                    itemList.filter((item: Item) => item.name.toLowerCase().includes(searchInput)).map(item => {
                        return <ItemRow item={item} key={item.id} />
                    })
                }
            </div>
        </div>
    )
}

export default ItemManagementPage
