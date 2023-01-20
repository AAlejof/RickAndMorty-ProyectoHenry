import React, { Component } from 'react'
import styles from './Nav.module.css'
import logo from '../logo.png';
import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from "react-router-dom";



const Navbar = ({ onSearch }) => {

  return (
    <nav className={styles.Navbar}>
      <img className={styles.Logo} src={logo} alt="Rick&Morty logo" />

      <Link to="/home">
        <button className={styles.NavbarButton}>
          Home
        </button>
      </Link>
      <Link to="/About">
        <button className={styles.NavbarButton}>
          About
        </button>
      </Link>
      <div className={styles.NavSearchBar}><SearchBar onSearch={onSearch} /></div>

      <Link to='/'><button className={styles.NavbarButton}>
          Logout
        </button></Link>

    </nav>
  );
}

export default Navbar;