import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import ItemManagementPage from './pages/ItemManagement/ItemManagementPage'
import ShoppingListPage from './pages/ShoppingList/ShoppingListPage'


function App() {
 	return (
    	<div className='App'>
            <AuthContextProvider>
                <Navbar />
                <Router>
                    <Routes>
                        <Route path='/' element={<ItemManagementPage />} />
                        <Route path='/lista' element={<ShoppingListPage />} />
                    </Routes>
                </Router>
            </AuthContextProvider>
    	</div>
  	)
}

export default App
