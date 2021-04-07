import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/homepage/logo.png'
import { FaBars, FaSearch, FaShoppingCart, FaUserPlus } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="header flex items-center justify-between py-3 xl:mx-20">
      <div className="menu-btn flex">
        <div className="mx-4 cursor-pointer">
          <FaBars />
        </div>
        <div className="cursor-pointer">
          <FaSearch />
        </div>
      </div>

      <div className="logo">
        <div>
          <Link to="/">
            <img src={Logo} alt="Microsoft" />
          </Link>
        </div>

        <ul>
          <li>
            <Link to="/microsoft-365" className="hover:underline">Microsoft 365</Link>
          </li>
          <li>
            <Link to="/office" className="hover:underline">Office</Link>
          </li>
          <li className="cursor-pointer hover:underline">Windows</li>
          <li className="cursor-pointer hover:underline">Surface</li>
          <li className="cursor-pointer hover:underline">Xbox</li>
          <li className="cursor-pointer hover:underline">Support</li>
        </ul>
      </div>

      <div className="cart flex cursor-pointer">
        <div>
          <FaShoppingCart />
        </div>
        <div className="mx-4 cursor-pointer">
          <FaUserPlus />
        </div>
      </div>

      <div className="sign-in">
        <ul>
          <li className="cursor-pointer hover:underline">All Microsoft</li>
          <li className="cursor-pointer hover:underline"><abbr title="Search"><FaSearch /></abbr></li>
          <li className="cursor-pointer hover:underline"><abbr title="Cart"><FaShoppingCart /></abbr></li>
          <li className="cursor-pointer hover:underline"><abbr title="Sign-in"><FaUserPlus /></abbr></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
