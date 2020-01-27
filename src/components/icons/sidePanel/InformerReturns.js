import React from 'react'
import { InformerReturnsSvg } from '../svgs'
import Generic from './Generic'
import style from '../styles.scss'

export const InformerReturns = (props) => {
  return (
    <Generic props={props}>
      <div>
        <InformerReturnsSvg css={style['InformerReturns']}/>
      </div>
    </Generic>
  )
}

