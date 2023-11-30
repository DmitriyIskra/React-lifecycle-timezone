import React from 'react';
import styles from'./css/ZoneGetData.module.css'; 

// поле input для получения временной зоны
export default function ZoneGetData({data}) {

  return (
    <div className={styles['gd-wrapper-zone']}>
        <label className={styles['gd-label-zone']} htmlFor="zone">Временная зона</label>
        <input 
        className={`${styles['gd-input-zone']} ${data ? styles[`gd-input-zone-${data}`] : ''}`} 
        type="text" 
        name="zone" 
        id="gd-zone" 
        placeholder='UTC+2 или UTC-2'
        required />
    </div>
  )
}
