import React from 'react';
import styles from './banner.module.css'

const Banner = () => {
  return (
    <div className={`${styles.Banner} container`}>
      <span>Decorações</span> 
      <h1>Brilho da Magia</h1>
      <p>Sua festa do jeitinho que você sempre imaginou!</p>
    </div>
  );
};

export default Banner;
