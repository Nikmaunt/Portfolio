import React from 'react';

import style from './projects.module.scss'
import styleContainer from './../Common/styles/Container.module.css'
import Project from './project/project';
import Title from "../Common/components/title/title";
import todoImg from "../assets/image/47961250-8518d900-e04a-11e8-94b7-5f6ed160e7cb.png"
import movieImg from "../assets/image/movie.jpg"

export type backgroundType ={
    color: string
    backgroundImage: string
}

const Projects = () => {
    const movieApp = {
        color: 'blue',
        backgroundImage: `url(${movieImg})`,
    };
    const todoApp = {
        color: 'blue',
        backgroundImage: `url(${todoImg})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className= {`${styleContainer.container} ${style.projectsContainer}`} >
           <Title text={'Projects'}/>
                <div className={style.projects}>
                  <Project style={movieApp}  projectName={'Movie App'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}/>
                  <Project  style={todoApp } projectName={'Todo List'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;