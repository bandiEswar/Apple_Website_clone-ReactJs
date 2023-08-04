import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='head'>
        <nav>
        <div >
          <ul className='ul-list'>
            <Link to='/' className='logo-home'  ><img className='logo-1' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/mac-os.png" alt="mac-os" id='b1' /></Link>
            <Link to="/stores">Store</Link>
            <Link to="/mac">Mac</Link>
            <Link to="/ipad">iPad</Link>
            <Link to="/iphone">iPhone</Link>
            <Link to="/watch">Watch</Link>
            <Link to="/vision">Vision</Link>
            <Link to="/airpods">AirPods</Link>
            <Link to="/tv">Tv&Home</Link>
            <Link to="/entertainment">Entertainment</Link>
            <Link to="/accessories">Accessories</Link>
            <Link to="/support">Support</Link>
       <Link to='/search' className='logo-search'> <img className='logo' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" id='b2'/></Link>
       <Link to='/cart' className='logo-cart'> <img className='logo' width="32" height="32" src="https://img.icons8.com/windows/32/shopping-bag.png" alt="shopping-bag" id='b3'/></Link>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar