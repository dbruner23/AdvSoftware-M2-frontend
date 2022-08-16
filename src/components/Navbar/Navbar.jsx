import React from 'react'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [productsList, setProductsList] = useState(false)
  const [companyList, setCompanyList] = useState(false)
  const [supportList, setSupportList] = useState(false)  




  return (
    <div className="NavBar">
        <div className="Logo">
          <img src="https://www.turners.co.nz/contentassets/3e15c8546917474ca0a150b18e9fd64e/turnerscars_logo_1line_horz_true-rgb-desktop.png" alt=""/>
        </div>
        <div className="NavOptions">
          <div className="NavMenu" onMouseEnter={() => setProductsList(true)} onMouseLeave={() => setProductsList(false)}>
            <div className="ListHeader" >
              Products <i class="fa fa-caret-down"></i>
            </div>
            <div className="Dropdown" onMouseLeave={() => setProductsList(false)} style={productsList ? { display: 'flex' } : { display: 'none' }}>
              <div className="DropItem">
                WaterTracker
              </div>
              <div className="DropItem">
                GeoLink
              </div>
              <div className="DropItem">
                Water Visualiser
              </div>
            </div>
          </div>
          <div className="NavMenu" onMouseEnter={() => setCompanyList(true)} onMouseLeave={() => setCompanyList(false)}>
            <div className="ListHeader">
              Company <i class="fa fa-caret-down"></i>
            </div>
            <div className="Dropdown" onMouseLeave={() => setCompanyList(false)} style={companyList ? { display: 'flex' } : { display: 'none' }}>
              <div className="DropItem">
                About
              </div>
              <div className="DropItem">
                News
              </div>
              <div className="DropItem">
                Careers
              </div>
            </div>
          </div>
          <div className="NavMenu" onMouseEnter={() => setSupportList(true)} onMouseLeave={() => setSupportList(false)}>
            <div className="ListHeader">
              Support <i class="fa fa-caret-down"></i>
            </div>
            <div className="Dropdown" onMouseLeave={() => setSupportList(false)} style={supportList ? { display: 'flex' } : { display: 'none' }}>
              <div className="DropItem">
                Community
              </div>
              <div className="DropItem">
                Contact
              </div>
              <div className="DropItem">
                FAQ
              </div>
            </div>
          </div>
            <button className="Login">
                Login
        </button>
      </div>
      <div className="MobileMenu">
        <div className="MobileMenu">
          <input id="toggle1" type="checkbox" />
          <label className="hamburger1" for="toggle1">
            <div className="top"></div>
            <div className="meat"></div>
            <div className="bottom"></div>
          </label>

          <nav className="menu1">
            <div className="link1">Products</div>
            <div className="link1">Company</div>
            <div className="link1">Support</div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar