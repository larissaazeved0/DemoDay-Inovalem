import React, { useState } from 'react'
import * as TbIcons from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { SidebarData } from './SideBarData'
import './SideBar.css'
import { IconContext } from 'react-icons'


const SideBar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <IconContext.Provider value={{ color: 'var(--laranja)' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <TbIcons.TbMenu2 onClick={showSidebar} />
          </Link>
        </div>
      </IconContext.Provider>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle" >
            <Link to='#' className='menu-bars'>
              <div className='close'>
                <TbIcons.TbArrowNarrowLeft />
              </div>
            </Link>
          </li>

          {SidebarData.map((item, index) => {
            return (

              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span className='itemSpanSidebar'>{item.title}</span>

                </Link>

              </li>

            )
          })}
        </ul>
      </nav>

    </>
  )
}

export default SideBar;