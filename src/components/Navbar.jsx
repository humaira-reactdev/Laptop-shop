import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='w-full bg-[#405D72] '>
        <div className='container mx-auto'>
          <div className='menu_row flex justify-between px-7 mb-3'>
            <div className='logo'>
              <Link to='/'><img src="https://cdn-icons-png.flaticon.com/512/428/428001.png" alt="logo" className='w-[60px] h-[60px]'/></Link>
            </div>
            <div className='menu_options pt-[45px]'>
              <ul className='flex gap-[40px] font-semibold text-[20px] text-[#DCF2F1]'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/users'>Users</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
              </ul>

            </div>

          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar