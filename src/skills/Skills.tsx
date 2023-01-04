import React from 'react';

import style from '../skills/Skills.module.css'
import styleContainer from './../Common/styles/Container.module.css'
import Skill from "./skill/skill";
import Title from "../Common/components/title/title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`} >
                <Title text={'Skills'}/>
                <div className={style.skills}>
                  <Skill title={'JS'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}/>
                  <Skill title={'CSS'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}/>
                  <Skill title={'React'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;