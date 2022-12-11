import React from 'react';
import style from "./Main.module.css";
import styleContainer from './../Common/styles/Container.module.css'


const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.greeting}>
                <span>Hi there</span>
                <h1><strong>I am Kokhan Nikita</strong></h1>
                <p>React developer </p>
            </div>
            <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;