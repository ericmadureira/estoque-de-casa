import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import ItemManagementPage from './pages/ItemManagement/ItemManagementPage'
import ShoppingListPage from './pages/ShoppingList/ShoppingListPage'


function App(): JSX.Element {
 	return (
    	<div className='App'>
            <Navbar />
            <Router>
                <Routes>
                    <Route path='/' element={<ItemManagementPage />} />
                    <Route path='/lista' element={<ShoppingListPage />} />
                </Routes>
            </Router>
    	</div>
  	)
}

export default App
