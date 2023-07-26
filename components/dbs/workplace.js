import React from 'react'
import Link from 'next/link'
import classes from './workplace.module.css'

const WorkPlace = (props) => {
  return (
    <li className={classes['work-place']}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.subtitle}>{props.subtitle}</div>

      <Link key={props.linkTitle} href={props.link} target="_blank">
        {props.linkTitle}
      </Link>
    </li>
  )
}

export default WorkPlace
