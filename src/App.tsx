import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import ItemManagementPage from './pages/ItemManagementPage'


function App() {
 	return (
    	<div className="App">
            <Navbar />
			<Router>
                <Routes>
                    <Route path='/' element={<ItemManagementPage />} />
                </Routes>
            </Router>
    	</div>
  	)
}

export default App
