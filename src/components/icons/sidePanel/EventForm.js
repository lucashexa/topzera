import React from 'react'
import { EventFormSvg } from '../svgs'
import Generic from './Generic'
import style from '../styles.scss'

const EventForm = (props) => {
  return (
    <Generic props={props}>
      <div>
        <EventFormSvg css={style['EventForm']}/>
      </div>
    </Generic>
  )
}

export default EventForm
