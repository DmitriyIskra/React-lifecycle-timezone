import React from 'react';

import './css/WatcheItem.css';

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
    const parrent = e.target.closest('.watches-item');
    const elId = parrent.id;

    callback(elId);
  }

  return (
    <li className='watches-item' id={data.name}>
      <div>
        <div className='watches-name'>{data.name}</div>
        <div className='watches-value'>{`${h}:${m}:${s}`}</div>
      </div>
      <div className="close-item" onClick={onHandlerClick}>Х</div>
    </li>
  )
}
