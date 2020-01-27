import React from 'react'
import { LocationOfInteresetSvg } from '../svgs'
import Generic from './Generic'
import style from '../styles.scss'

export const LocationOfIntereset = (props) => {
  return (
    <Generic props={props}>
      <div>
        <LocationOfInteresetSvg css={style['LocationOfIntereset']}/>
      </div>
    </Generic>
  )
}

