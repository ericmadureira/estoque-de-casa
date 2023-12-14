import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import AddItemModal from '../../components/AddItemModal'
import EditItemModal from '../../components/EditItemModal'
import ItemRow from '../../components/ItemRow/ItemRow'
import { addNewItem, getAllItems } from '../../services/item-data'
import { Item, ItemCreationParams } from '../../types/Item'

import './ItemManagementPage.css'

const EMPTY_ITEM: Item = { id: '', amount: 0, name: '', expirationDate: { seconds: 0, nanoseconds: 0 },
    price: 0, category: '', weight: 0, ean: '' }

const ItemManagementPage = () => {
    // State
    const [itemList, setItemList] = useState<Item[]>([])
    const [searchInput, setSearchInput] = useState<string>('')
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<Item>(EMPTY_ITEM)
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
    const handleClickAddItem = () => {
        setIsAddModalOpen(true)
    }

    // Effects
    useEffect(() => {
        // Fetches all items from db/firebase.
        getAllItems().then(items => setItemList(items))
    }, [])

    return (
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button style={{ marginRight: 8, width: 60 }}><i className='fa-solid fa-barcode' /></button>
                <button style={{ marginRight: 8, width: 60 }} onClick={handleClickAddItem}><i className='fa-solid fa-plus' /></button>
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    placeholder='Filtrar...'
                    style={{ marginBottom: 0, flexGrow: 4 }}
                />
            </div>
            <div className='list-header'>
                <span style={{ width: 55, marginRight: 16 }}>Quant.</span>
                <span style={{ flexGrow: 4 }}>Nome</span>
            </div>
            <div style={{ width: '100%' }}>
                { itemList.filter((item: Item) => item.name.toLowerCase().includes(searchInput)).map(item => {
                    return (
                        <ItemRow
                            item={item}
                            key={item.id}
                            setIsEditModalOpen={setIsEditModalOpen}
                            setSelectedItem={setSelectedItem}
                        />
                    )
                })}
            </div>
            { isAddModalOpen &&
                <AddItemModal
                    handleAddNewItem={handleAddNewItem}
                    setIsAddModalOpen={setIsAddModalOpen}
                />
            }
            { isEditModalOpen &&
                <EditItemModal
                    selectedItem={selectedItem}
                    setIsEditModalOpen={setIsEditModalOpen}
                />
            }
        </div>
    )
}

export default ItemManagementPage
