import React from 'react';

import style from '../projects/projects.module.css'
import styleContainer from './../Common/styles/Container.module.css'
import Project from './project/project';

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className= {`${styleContainer.container} ${style.projectsContainer}`} >
                <div className={style.title}>
                    <h2>My projects</h2>
                </div>
                <div className={style.projects}>
                  <Project  projectName={'Name 1'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}/>
                  <Project  projectName={'Name 2'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;