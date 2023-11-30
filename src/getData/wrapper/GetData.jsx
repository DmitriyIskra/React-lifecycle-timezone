import React from 'react';
import { useState } from 'react';

import NameGetData from '../name/NameGetData';
import ZoneGetData from '../zone/ZoneGetData';
import ButtonGetData from '../button/ButtonGetData';

import styles from './css/GetData.module.css';

// форма с input для получения данных какие часы нужны
export default function GetData({callback}) {

    const [validateZone, setValidateZone] = useState(null)

    const onHandlerSubmit = (e) => {
        e.preventDefault();

        // получаем данные из формы
        const name = e.target.name.value;
        const zone = e.target.zone.value;
        // UTC+5
        // валидируем поле zone
        const result = /^UTC[+,-]?\d\d?(:\d\d?)?$/.test(zone);

        // показываем ошибку или отправляем данные выше для перерисовки
        if(!result) {
            console.log('error error')
            setValidateZone('error');
        } else {
            setValidateZone(null);
            callback({name, zone});
        }
    }

    return (
        <form className={styles['get-data-form']} name='getDataForm' onSubmit={onHandlerSubmit}>
            <NameGetData />
            <ZoneGetData data={validateZone} />
            <ButtonGetData />
        </form>
    )
} 
