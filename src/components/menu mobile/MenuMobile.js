'use client';
import { Link } from 'react-scroll';
import React, { useState } from 'react';
import styles from './MenuMobile.module.css';

const MenuMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className={styles.containerMobile}>
      <button
        className={styles.mobileMenuIcon}
        onClick={() => setMobileMenu(!mobileMenu)}
      ></button>

      <nav
        className={`${styles.listMobile}  ${
          mobileMenu ? styles.listMobileActive : styles.listMobile
        }`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href=""
        >
          Home
        </Link>
        <Link
          to="redes"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href=""
        >
          Redes Sociais
        </Link>
        <Link
          to="contato"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href=""
        >
          Contato
        </Link>
        <Link
          to="parceiros"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href=""
        >
          Parceiros
        </Link>
      </nav>
    </div>
  );
};

export default MenuMobile;
