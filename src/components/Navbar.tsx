import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { SHOPPING_LIST_PAGE_PATH, STOCK_PAGE_PATH } from '../routes'

interface RouteLinkProps {
    currentPath: string
    title: string
    path: string
}
const RouteLink = ({ currentPath, title, path }: RouteLinkProps): JSX.Element => (
    <li>
        <Link to={path}>
            <span style={{ color: 'white', fontWeight: currentPath === path ? 'bold' : 'normal' }}>{title}</span>
        </Link>
    </li>
)

const Navbar = () => {
    const location = useLocation()
    const { pathname } = location

    return (
        <nav className='container'
            style={{ display: 'flex', backgroundColor: '#1095C1',
            alignItems: 'center', marginBottom: 16
        }}>
            <ul>
                <RouteLink currentPath={pathname} path={STOCK_PAGE_PATH} title='Estoque'/>
                 | 
                <RouteLink currentPath={pathname} path={SHOPPING_LIST_PAGE_PATH} title='Lista de compras'/>
            </ul>
            <ul>
                <li><i className='fa-regular fa-circle-user' style={{ fontSize: 24, color: 'white' }} /></li>
            </ul>
        </nav>
    )
}

export default Navbar
