import React from 'react';
import styles from './css/NameGetData.module.css';

// Поле input для получения названия часов
export default function NameGetData() {
  return (
    <div className={styles['gd-wrapper-name']}>
        <label className={styles['gd-label-name']} htmlFor="name">Название</label>
        <input 
        className={styles['gd-input-name']}
        type="text" 
        name="name" 
        id="gd-name" 
        placeholder='Название часов'
        required />
    </div>
  )
} 
