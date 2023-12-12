import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import AddItem from '../../components/AddItem'
import ItemRow from '../../components/ItemRow/ItemRow'
import { addNewItem, getAllItems } from '../../services/item-data'
import { Item, ItemCreationParams } from '../../types/Item'

import './ItemManagementPage.css'
import ItemEditModal from '../../components/ItemEditModal'


const ItemManagementPage = () => {
    // State
    const [itemList, setItemList] = useState<Item[]>([])
    const [searchInput, setSearchInput] = useState<string>('')
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<Item>(
        { id: '', amount: 0, name: '', expirationDate: { seconds: 0, nanoseconds: 0 }, price: 0, category: '', weight: 0, ean: '' })
    const navigate = useNavigate()

    // Methods
    const handleAddNewItem = async (itemCreationParams: ItemCreationParams) => {
        await addNewItem(itemCreationParams)
        navigate('/')
    }

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setSearchInput(event.target.value)
    }

    useEffect(() => {
        // Fetches all items from db/firebase.
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
                <span style={{ width: 55, marginRight: 16 }}>Quant.</span>
                <span style={{ flexGrow: 4 }}>Nome</span>
                <span></span>
            </div>
            <div style={{ width: '100%' }}>
                {
                    itemList.filter((item: Item) => item.name.toLowerCase().includes(searchInput)).map(item => {
                        return (
                            <ItemRow
                                item={item}
                                key={item.id}
                                setIsEditModalOpen={setIsEditModalOpen}
                                setSelectedItem={setSelectedItem}
                            />
                        )
                    })
                }
            </div>
            <ItemEditModal
                isEditModalOpen={isEditModalOpen}
                selectedItem={selectedItem}
                setIsEditModalOpen={setIsEditModalOpen}
            />
        </div>
    )
}

export default ItemManagementPage
