import React from 'react'
import { AgencySvg } from '../svgs'
import Generic from './Generic'
import style from '../styles.scss'

export const Agency = (props) => {
  return (
    <Generic props={props}>
      <div>
        <AgencySvg css={style['Agency']}/>
      </div>
    </Generic>
  )
}

