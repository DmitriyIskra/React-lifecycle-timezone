import React from 'react';
import { v4 } from 'uuid';

import styles from './css/WatchesList.module.css';

import WatchesItem from '../Item/WatcheItem';

export default function WatchesList({data, callback}) {

    return (
        <ul className={styles['watches-list']}>
            {/* если в состоянии со временем уже есть что-то отрисовываем сами часы*/}
            { 
                data.length > 0 ? (
                    data.map( (item, index) => {
                            // console.log(data[index])
                            return <WatchesItem key={v4()}
                             data={item}
                             callback={callback}
                             />
                        } )
                    ) : 
                    ('')
            }
        </ul>
    )
}
