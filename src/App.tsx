import React from 'react'
import {
    BrowserRouter,
    Navigate,
    Routes,
    Route,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import ItemManagementPage from './pages/ItemManagementPage'
import ShoppingListPage from './pages/ShoppingListPage'
import { SHOPPING_LIST_PAGE_PATH, STOCK_PAGE_PATH } from './routes'

// TO-DO: implement error boundary
function App(): JSX.Element {
 	return (
    	<div className='App'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Navigate to={STOCK_PAGE_PATH} />} />
                    <Route path={STOCK_PAGE_PATH} element={<ItemManagementPage />} />
                    <Route path={SHOPPING_LIST_PAGE_PATH} element={<ShoppingListPage />} />
                </Routes>
            </BrowserRouter>
    	</div>
  	)
}

export default App
