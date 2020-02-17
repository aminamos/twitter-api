import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink to='/' className='nav'>Home</NavLink>
        <NavLink to='/about' className='nav'>About</NavLink>
        <NavLink to='/contact' className='nav'>Contact Us</NavLink>
        <NavLink to='/careers' className='nav'>Careers</NavLink>
      </div>
    )
  }
}