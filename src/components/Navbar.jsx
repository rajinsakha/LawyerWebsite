// import {useState} from 'react';

const Navbar = () => {
  return (
    <nav className="h-12 w-full flex justify-center items-center " style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
      <ul className='navlinks flex justify-center items-center'>
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
