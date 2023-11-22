import React from 'react';
import './css/NameGetData.css';

// Поле input для получения названия часов
export default function NameGetData() {
  return (
    <div className='gd-wrapper-name'>
        <label className='gd-label-name' htmlFor="name">Название</label>
        <input className='gd-input-name' type="text" name="name" id="gd-name" required />
    </div>
  )
} 
