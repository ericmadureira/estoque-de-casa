import React, { useState, useEffect } from 'react'

import AddItemModal from '../components/AddItemModal'
import EditItemModal from '../components/EditItemModal'
import ItemRow from '../components/ItemRow'
import { addNewItem, getAllItems, updateItem } from '../services/item-data'
import { Item, ItemCreationParams, ItemUpdateParams } from '../types/Item'

const EMPTY_ITEM: Item = { id: '', amount: 0, name: '', expirationDate: '2024-01-25',
    price: 0, category: '', weight: 0, ean: '' }

    // TO-DO: change page to focus on displaying current status, while hiding edit option a bit.
const ItemManagementPage = () => {
    // State
    const [itemList, setItemList] = useState<Item[]>([])
    const [searchInput, setSearchInput] = useState<string>('')
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<Item>(EMPTY_ITEM)

    // Methods
    const handleAddNewItem = async (itemCreationParams: ItemCreationParams) => {
        await addNewItem(itemCreationParams)
        setIsAddModalOpen(false)
        refreshItemList()
    }
    const handleUpdateItem = async (itemUpdateParams: ItemUpdateParams) => {
        await updateItem(itemUpdateParams)
        setIsEditModalOpen(false)
        refreshItemList()
    }
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setSearchInput(event.target.value)
    }
    const handleClickAddItem = () => {
        setIsAddModalOpen(true)
    }
    const refreshItemList = () => {
        getAllItems().then(items => setItemList(items))
    }

    // Effects
    useEffect(() => {
        // TO-DO: implement cancel token from axios
        refreshItemList()
    }, [])

    // UI
    const ScanBarcodeButton = () => (
        <button
            data-tooltip='Ler código de barras'
            data-placement='right'
            style={{ marginRight: 8, width: 60 }}
        >
            <i className='fa-solid fa-barcode' />
        </button>
    )
    const ManualAddButton = () => (
        <button
            data-tooltip='Adicionar manualmente'
            data-placement='right'
            style={{ marginRight: 8, width: 60 }}
            onClick={handleClickAddItem}
        >
            <i className='fa-solid fa-plus' />
        </button>
    )
    // TO-DO: fix disappearing input focus after typing on search.
    const SearchInput = () => (
        <input
            type='text'
            value={searchInput}
            onChange={handleSearchInputChange}
            placeholder='Filtrar...'
            style={{ marginBottom: 0, flexGrow: 4 }}
        />
    )
    const ListHeader = () => (
        <div style={{display: 'flex', fontWeight: 'bold' }}>
            <span style={{ width: 55, marginRight: 16 }}>Quant.</span>
            <span>Nome</span>
        </div>
    )
    const ItemList = () => (
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
    )

    return (
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <ScanBarcodeButton />
                <ManualAddButton />
                <SearchInput />
            </div>
            <ListHeader />
            <ItemList />
            { isAddModalOpen &&
                <AddItemModal
                    handleAddNewItem={handleAddNewItem}
                    setIsAddModalOpen={setIsAddModalOpen}
                />
            }
            { isEditModalOpen &&
                <EditItemModal
                    handleUpdateItem={handleUpdateItem}
                    selectedItem={selectedItem}
                    setIsEditModalOpen={setIsEditModalOpen}
                />
            }
        </div>
    )
}

export default ItemManagementPage
