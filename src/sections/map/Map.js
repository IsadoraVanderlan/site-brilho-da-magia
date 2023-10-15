import React from 'react';
import styles from '@/sections/map/map.module.css'

const Map = () => {
  return (
    <div className={`${styles.Map} container`}>
      <div className={styles.MapTexto}>
        <img src="./img/contato.png" alt="" />
      </div>

      <div className={styles.MapMap}> 
        <h2>Observação:</h2>
        <p>Nosso endereço é somente para retirada, atendimento ao cliente somente via WhatsApp.</p>
        <img src="./img/map.png" alt="" />
      </div>
      
    </div>
  )
}

export default Map
