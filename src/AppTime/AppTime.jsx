import React from 'react';
import { useState, useEffect, useRef } from 'react';

// Компонет для получения параметров какие часы нужны
import GetData from '../getData/wrapper/GetData';
import WatchesList from '../watches/List/WatchesList';

import styles from './css/AppTime.module.css';

export default function AppTime() {
  const [TimeZones, setTimeZones] = useState([]);
  const [clocks, setClocks] = useState([]);
  const [milliseconds, setMilliseconds] = useState(0);
  const timeoutId = useRef(0);
  

  // Получаем имена и временные зоны и сохраняем в состояние
  const getWatch = watch => setTimeZones( prevTimeZones => {
    // Делаем так чтобы в состоянии были только уникальные значения 
    const result = prevTimeZones.some( item => {
      return item.name === watch.name;
    } );

    if(!result) {
      return [...prevTimeZones, watch];
    }

    return [...prevTimeZones];
  });

  
  const updateTime = () => {
    timeoutId.current = setTimeout(() => {
      setMilliseconds(new Date().getTime());
    }, 1000);
  };


  // генерируем миллисекунды (время) на каждую timezone и 
  // для часов и имя для часов
  const generateClocks = () => {
      const w = [...TimeZones];
      // сдвиг временной зоны системы
      const myOffset = Math.abs(new Date().getTimezoneOffset());
      

      setClocks( () => {
        const arr = w.map( item => {
          // время в миллисекундах во временной зоне системы
          const myTime = new Date().getTime();
          // время в миллисекундах в запрошенной зоне
          let zoneTime;

          // сдвиг запрошенной временной зоны
          const offset = Number(item.zone.slice(4, 5)) * 60;
          
          if(item.zone.indexOf('+') !== -1) {
            
            // прибавлять или вычитать зависть от величины сдвига и знака
            if(offset < 5) {
              // получаем время в миллисекундах в запрошенной зоне
              zoneTime = new Date(myTime - ((myOffset + offset) * 60000)).getTime();
            } else {
              zoneTime = new Date(myTime - ((myOffset - offset) * 60000)).getTime();
            }

          } else {
            zoneTime = new Date(myTime - ((myOffset + offset) * 60000)).getTime();
          }

          return {name: item.name, milliseconds: zoneTime};
        })

        return arr
      })

      
      // updateTime();
  }

  // Функция удаления часового пояса
  const deleteClock = (id) => {
    const w = [...TimeZones];
  
    const newW = w.filter( item => item.name !== id);

    setTimeZones(newW);
  }

  // после изменения TimeZones генерируем время и обновляем state счасами clocks
  // где храним миллисекунды для генерации времени в дальнейшем
  // запускаем функцию обновления времени updateTime которая изменит milliseconds
  // для того чтобы сработал следующий useEffect
  useEffect(
    generateClocks, [TimeZones]
  );

  useEffect(() => {
    if(clocks.length > 0) {
      updateTime();
    }

    return () => clearTimeout(timeoutId.current)
  }, [clocks]);

  // при изменении milliseconds снова запускаем generateClocks
  useEffect(generateClocks, [milliseconds]);


  return (
    <div className={styles['app-time-wrapper']}>
      <GetData callback={getWatch}/>
      { clocks.length > 0 && <WatchesList
       data={clocks}
       callback={deleteClock}
       />}
    </div>
  )
}
