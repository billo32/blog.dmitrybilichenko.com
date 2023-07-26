import React from 'react'

import classes from './workplace.module.css'

const WorkPlace = (props) => {
  return (
    <li className={classes['work-place']}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.subtitle}>{props.subtitle}</div>
      <a href={props.link} target="_blank" rel="noreferrer">
        {props.linkTitle}
      </a>
    </li>
  )
}

export default WorkPlace
