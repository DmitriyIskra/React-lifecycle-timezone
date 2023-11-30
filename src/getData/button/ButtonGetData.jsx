import React from 'react';
import styles from './css/ButtonGetData.module.css';

// Кнопка формы получения данных
export default function ButtonGetData() {
  return (
    <div className={styles['gd-wrapper-button']}>
        <button className={styles['gd-button']}>Добавить</button>
    </div>
  )
} 
