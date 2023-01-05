import React from 'react';

import style from './/project.module.scss'
import {backgroundType} from "../projects";



type ProjectType ={
    description:string
    projectName:string
    style: backgroundType
}


const Project = (props:ProjectType) => {
    return (
        <div className={style.project}>
              <div className={style.projectImg} style={props.style}>
                  <div><button className={style.buttonLink}> Link </button></div>
              </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}> {props.projectName} </h3>
                <span className={style.description}>{props.description} </span>
            </div>

        </div>
    );
};

export default Project;