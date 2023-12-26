import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import ItemManagementPage from './pages/ItemManagementPage'
import ShoppingListPage from './pages/ShoppingListPage'


function App(): JSX.Element {
 	return (
    	<div className='App'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ItemManagementPage />} />
                    <Route path='/lista' element={<ShoppingListPage />} />
                </Routes>
            </BrowserRouter>
    	</div>
  	)
}

export default App
