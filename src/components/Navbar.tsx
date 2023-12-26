import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container'
            style={{
                display: 'flex', backgroundColor: '#1095C1',
                justifyContent: 'space-between', alignItems: 'center',
                color: 'white', padding: 16, marginBottom: 16
        }}>
            <Link to='/'><span style={{ fontWeight: 'bold', color: 'white' }}>Estoque de Casa</span></Link>
            <i className='fa-regular fa-circle-user fa-2x' />
        </div>
    )
}

export default Navbar
