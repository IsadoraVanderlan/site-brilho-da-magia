import React from 'react';
import styles from '@/sections/parceiros/parceiros.module.css'

const Parceiros = () => {
  return (
    <div className={`${styles.Parceiros} container`}>
      <h2>Nossos Parceiros</h2>
      <p>Veja abaixos os nossos parceiros de confiança!</p>
      
      <div className={styles.ParceirosImg}>
        <div className={styles.ParceirosCaixa}>
          <img src="./img/ijcode.png" alt="" />
          <h3>IJCode</h3>
          <p>A IJCode é uma empresa de desenvolvimento de sites, foi a responsavel pelo desenvolvimento deste site, nós recomendamos</p>
        </div>

        <div className={styles.ParceirosCaixa}>
          <img src="./img/ijcode.png" alt="" />
          <h3>IJCode</h3>
          <p>A IJCode é uma empresa de desenvolvimento de sites, foi a responsavel pelo desenvolvimento deste site, nós recomendamos</p>
        </div>

        <div className={styles.ParceirosCaixa}>
          <img src="./img/ijcode.png" alt="" />
          <h3>IJCode</h3>
          <p>A IJCode é uma empresa de desenvolvimento de sites, foi a responsavel pelo desenvolvimento deste site, nós recomendamos</p>
        </div>
      </div>
    </div>
  )
}

export default Parceiros
