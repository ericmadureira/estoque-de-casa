import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='container'
            style={{ display: 'flex', backgroundColor: '#1095C1', 
            alignItems: 'center', marginBottom: 16
        }}>
            <ul>
                <li>
                    <Link to='/'><span style={{ fontWeight: 'bold', color: 'white' }}>Estoque</span></Link>
                </li> | 
                <li>
                    <Link to='/lista'><span style={{ fontWeight: 'bold', color: 'white' }}>Lista de compras</span></Link>
                </li>
            </ul>
            <ul>
                <li><i className='fa-regular fa-circle-user' style={{ fontSize: 24, color: 'white' }} /></li>
            </ul>
        </nav>
    )
}

export default Navbar
