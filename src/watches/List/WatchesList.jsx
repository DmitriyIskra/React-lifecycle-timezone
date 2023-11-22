import React from 'react';
import { v4 } from 'uuid';

import './css/WatchesList.css';

import WatchesItem from '../Item/WatcheItem';

export default function WatchesList({data, callback}) {

    return (
        <ul className='watches-list'>
            {/* если в состоянии со временем уже есть что-то отрисовываем сами часы*/}
            {/* { console.log('clocks.length', clocks.length)} */}
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
