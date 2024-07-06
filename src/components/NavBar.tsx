import React from 'react'
import classes from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          `${classes['navbar__link']}
          ${
            isPending
              ? classes['link__pending']
              : isActive
              ? classes['link__active']
              : ''
          }`
        }
      >
        Главная
      </NavLink>

      <NavLink
        to='/products'
        className={({ isActive, isPending }) =>
          `${classes['navbar__link']}
          ${
            isPending
              ? classes['link__pending']
              : isActive
              ? classes['link__active']
              : ''
          }`
        }
      >
        Каталог
      </NavLink>
      <NavLink
        to='/createproduct'
        className={({ isActive, isPending }) =>
          `${classes['navbar__link']}
          ${
            isPending
              ? classes['link__pending']
              : isActive
              ? classes['link__active']
              : ''
          }`
        }
      >
        Создать продукт
      </NavLink>

      <NavLink
        to='/about'
        className={({ isActive, isPending }) =>
          `${classes['navbar__link']}
          ${
            isPending
              ? classes['link__pending']
              : isActive
              ? classes['link__active']
              : ''
          }`
        }
      >
        О нас
      </NavLink>
    </div>
  )
}

export default NavBar
