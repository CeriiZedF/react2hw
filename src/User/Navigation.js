import React from 'react'
import { NavLink } from 'react-router-dom'



function Navigation() {
   

    return (
        <header>
            <nav>
                <ul className='menu'>
                    <li>
                        <li><NavLink to='/'>User</NavLink></li>
                        <li><NavLink to='/Book'>Book</NavLink></li>
                        <li><NavLink to='/BookC'>BookC</NavLink></li>
                        <li><NavLink to='/City'>City</NavLink></li>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
