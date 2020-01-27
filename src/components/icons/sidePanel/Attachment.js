import React from 'react'
import { AttachementSvg } from '../svgs'
import Generic from './Generic'
import style from '../styles.scss'

export const Attachement = (props) => {
  return (
    <Generic props={props}>
      <div>
        <AttachementSvg css={style['Attachement']}/>
      </div>
    </Generic>
  )
}

