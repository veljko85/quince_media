'use client'
import React, { useState } from "react";
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  
  const [active, setActive] = useState(true);
  const navBarToggleVisibility = () => {
    if(!active){
      setActive(true);
    } else {
      setActive(false);
    }
  }
  
  return (
    <div className={styles.headerContainer}>
      <div className={active ? `${styles.navBarShow} ${styles.navBarContainer}` : `${styles.navBarHide} ${styles.navBarContainer}`}>
        <Link href="/">Home</Link>
        <p>Services</p>
        <Link href="/about">Recent Works</Link>
        <Link href="/about/meet-the-team">About Us</Link>
        <Link href="/about">Contact us</Link>
        <p>Blog</p>
      </div>
      <div onClick={navBarToggleVisibility}
      className={styles.hamBtn}
      ></div>
    </div>
  )

}

export default Header