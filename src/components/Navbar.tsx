import React from 'react'

const Navbar = () => {
    return (
        <div className='container'
            style={{
                display: 'flex', backgroundColor: '#1095C1',
                justifyContent: 'space-between', alignItems: 'center',
                color: 'white', padding: 16, marginBottom: 16
        }}>
            <span style={{ fontWeight: 'bold' }}>Estoque de Casa</span>
            <i className='fa-regular fa-circle-user fa-2x' />
        </div>
    )
}

export default Navbar
