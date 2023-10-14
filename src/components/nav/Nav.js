'use client';
import React from 'react';
import styles from './nav.module.css';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <ul>
        <li className={styles.LiNav}>
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
        </li>

        <li>
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
        </li>

        <li>
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
        </li>
        
        <li>
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
        </li>
      </ul>
    </div>
  );
};

export default Nav;
