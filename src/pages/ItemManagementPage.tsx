import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import AddItem from '../components/AddItem'
import { currencyFormatOptions, expirationDateFormatter } from '../helpers/formatting'
import { addNewItem, getAllItems } from '../services/item-data'
import { Item, ItemCreationParams } from '../types/Item'

import './ItemManagementPage.css'



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1, hide: true },
    { field: 'name', headerName: 'Nome', flex: 1 },
    { field: 'amount', headerName: 'Quantidade', type: 'number', flex: 1 },
    {
        field: 'expirationDate',
        headerName: 'Validade',
        type: 'date',
        flex: 1,
        valueFormatter: (params) => expirationDateFormatter(params.value.seconds) },
    {
        field: 'price',
        headerName: 'Preço',
        type: 'number',
        flex: 1,
        valueFormatter: (params) => params.value.toLocaleString('pt-BR', currencyFormatOptions)
    },
    { field: 'category', headerName: 'Categoria', flex: 1 },
    { field: 'weight', headerName: 'Peso (g | ml)', type: 'number', flex: 1 },
]

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

    // Fetches all items from db/direbase.
    useEffect(() => {
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
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={
                        itemList.filter((item: Item) => item.name.toLowerCase().includes(searchInput))
                    }
                    columns={columns}
                    pageSize={50}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default ItemManagementPage
