import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import AddItem from '../../components/AddItem'
import { currencyFormatOptions, expirationDateFormatter } from '../../helpers/formatting'
import { addNewItem, getAllItems } from '../../services/item-data'
import { Item, ItemCreationParams } from '../../types/Item'

import './ItemManagementPage.css'


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'name', headerName: 'Nome' },
    { field: 'amount', headerName: 'Quantidade', type: 'number' },
    {
        field: 'expirationDate',
        headerName: 'Validade',
        type: 'date',
        valueFormatter: (params) => expirationDateFormatter(params.value.seconds) },
    {
        field: 'price',
        headerName: 'Preço',
        type: 'number',
        valueFormatter: (params) => params.value.toLocaleString('pt-BR', currencyFormatOptions)
    },
    { field: 'category', headerName: 'Categoria' },
    { field: 'weight', headerName: 'Peso (g | ml)', type: 'number' },
    { field: 'edit', headerName: 'Editar', renderCell: (params) => <button>EDITAR</button> },
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
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={
                        itemList.filter((item: Item) => item.name.toLowerCase().includes(searchInput))
                    }
                    columns={columns}
                    pageSize={25}
                    rowsPerPageOptions={[25]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default ItemManagementPage
