import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
        <div className='logo'>
            <NavLink to="/">
                <img src="https://res.cloudinary.com/hungtv/image/upload/v1663734409/logo_netviet-02_ti4b59.png" alt="" />
            </NavLink>
        </div>
    </div>
  )
}

export default Logo