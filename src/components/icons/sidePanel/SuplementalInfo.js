import React from 'react'
import { SuplementalInfoSvg } from '../svgs'
import Generic from './Generic'
import style from '../styles.scss'

export const SuplementalInfo = (props) => {
  return (
    <Generic props={props}>
      <div>
        <SuplementalInfoSvg css={style['SuplementalInfo']}/>
      </div>
    </Generic>
  )
}

