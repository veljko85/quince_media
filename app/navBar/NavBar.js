'use client'
import React, { useState } from "react";
import Link from 'next/link'
import styles from './navBar.module.css'

const NavBar = () => {
  const [active, setActive] = useState(true);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    if(!active){
      setActive(true);
      console.log(active, 'true')
    } else {
      setActive(false);
      console.log(active, 'false')
    }
  };
  const hideNavBar = () => {
    console.log(navBarContainer[0])
  }
  return (
    <div onClick={handleMouseOut} className={active ? `${styles.navBarContainerShow}` : `${styles.navBarContainerHide}`}>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
    </div>
  )
}

export default NavBar