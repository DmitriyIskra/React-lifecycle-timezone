import React from 'react';
import './css/ZoneGetData.css'; 

// поле input для получения временной зоны
export default function ZoneGetData({data}) {

  return (
    <div className='gd-wrapper-zone'>
        <label className='gd-label-zone' htmlFor="zone">Временная зона</label>
        <input className={`gd-input-zone ${data ? `gd-input-zone-${data}` : ''}`} type="text" name="zone" id="gd-zone" required />
    </div>
  )
}
