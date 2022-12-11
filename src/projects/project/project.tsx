import React from 'react';

import style from './/project.module.css'

type ProjectType ={
    description:string
    projectName:string
}

const Project = (props:ProjectType) => {
    return (
        <div className={style.project}>
              <div className={style.projectImg}>
                  <div><button className={style.buttonLink}> Link </button></div>
              </div>
              <h3> {props.projectName} </h3>
            <span className={style.description}>{props.description} </span>
        </div>
    );
};

export default Project;