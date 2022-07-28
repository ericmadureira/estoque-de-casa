import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

import ItemManagementPage from './pages/ItemManagementPage'


function App() {
 	return (
    	<div className="App">
			<Router>
                <Routes>
                    <Route path='/' element={<ItemManagementPage />} />
                </Routes>
            </Router>
    	</div>
  	)
}

export default App
