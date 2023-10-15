import React from 'react';
import Button from '@/components/button/Button';
import styles from './kit.module.css';

const Kit = () => {
  return (
    <div className={`${styles.Kit} container`}>
      <div className={styles.kitCaixa}>
        <div className={styles.HeaderKit}>
          <h2>Kit - Pegue e Monte</h2>
          <p>Entre em contato para mais detalhes</p>
        </div>

        <div className={styles.KitConteudo}>
          <div className={styles.KitValor}>
            <p>Valor a partir de</p>
            <span>R$ 150,00</span>
          </div>

          <ul>
            <li>
              <img src="./img/icon-spa.svg" alt="icon spa" />
              Festas
            </li>
            <li>
              <img src="./img/icon-spa.svg" alt="icon spa" />
              Aniversários
            </li>
            <li>
              <img src="./img/icon-spa.svg" alt="icon spa" />
              Casamentos
            </li>
            <li>
              <img src="./img/icon-spa.svg" alt="icon spa" />
              Festas de Chás
            </li>
            <li>
              <img src="./img/icon-spa.svg" alt="icon spa" />E muito mais
            </li>
          </ul>
        </div>

        <Button />
      </div>
    </div>
  );
};

export default Kit;
