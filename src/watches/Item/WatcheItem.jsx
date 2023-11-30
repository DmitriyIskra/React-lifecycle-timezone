import React from 'react';

import styles from './css/WatcheItem.module.css';

export default function WatchesItem({data, callback}) {

  // если цифра одна в значении добавляем ноль
  // let h = String(new Date(data.milliseconds).getHours());
  // h.length === 1 ? h = '0' + h : h = h;
  let h = String(new Date(data.milliseconds).getHours()).length === 1 ? 
    (
    '0' + String(new Date(data.milliseconds).getHours())) : 
    (
      String(new Date(data.milliseconds).getHours())
    );

  
  let m = String(new Date(data.milliseconds).getMinutes()).length === 1 ? 
    (
    '0' + String(new Date(data.milliseconds).getMinutes())) : 
    (
      String(new Date(data.milliseconds).getMinutes())
    );

  let s = String(new Date(data.milliseconds).getSeconds()).length === 1 ? 
    (
    '0' + String(new Date(data.milliseconds).getSeconds())) : 
    (
      String(new Date(data.milliseconds).getSeconds())
    );

  const onHandlerClick = (e) => {
    // Находим id элемента по крестику которого произошел клик
    const id = e.target.dataset.i;
    callback(id);
  }

  return (
    <li className={styles['watches-item']} id={data.name}>
      <div>
        <div className={styles['watches-name']}>{data.name}</div>
        <div className={styles['watches-value']}>{`${h}:${m}:${s}`}</div>
      </div>
      <div className={styles["close-item"]} data-i={data.name} onClick={onHandlerClick}>Х</div>
    </li>
  )
}
