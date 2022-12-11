import React from 'react';
import style from "../footer/Footer.module.css";
import styleContainer from "../Common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className= {`${styleContainer.container} ${style.footerContainer}`} >
                <h2 className={style.title}>Nikita Kokhan</h2>
                <div className={style.footer}>
                    <form className={style.footerSocialIcons}>
                      <div className={style.link}>1</div>
                      <div className={style.link}>2</div>
                      <div className={style.link}>3</div>
                      <div className={style.link}>4</div>
                    </form>
                </div>
             <span className={style.rights}> All rights reserved  </span>
            </div>

        </div>
    );
};

export default Footer;