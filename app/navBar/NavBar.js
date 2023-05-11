'use client'
import React, { useState } from "react";
import Link from 'next/link'
import styles from './navBar.module.css'

const NavBar = () => {
  
  const [active, setActive] = useState(true);
  const navBarToggleVisibility = () => {
    if(!active){
      setActive(true);
    } else {
      setActive(false);
      console.log('aaa')
    }
  }
  
  return (
    <div className={styles.navBarContainer}>
      <div className={active ? `${styles.navBarShow}` : `${styles.navBarHide}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
      </div>
      <div onClick={navBarToggleVisibility}
      className={styles.hamBtn}
      ></div>
    </div>
  )

}

export default NavBar