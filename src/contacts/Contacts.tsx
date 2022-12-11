import React from 'react';
import styleContainer from "../Common/styles/Container.module.css";
import Project from "../projects/project/project";
import style from '../contacts/Contacts.module.css'



const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className= {`${styleContainer.container} ${style.contactsContainer}`} >
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>
                   <form className={style.form}>
                       <input className={style.input} type="text"/>
                       <input className={style.input}  type="text"/>
                       <textarea className={style.textarea}/>
                   </form>
                    <button className={style.contactButton}> Send message </button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;