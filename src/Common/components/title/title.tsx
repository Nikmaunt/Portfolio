import React from 'react';
import style from './title.module.scss'


const Title = (props:{text:string}) => {
    return <div className={style.title}>
        <h2>{props.text}</h2>
    </div>

};

export default Title;