import React from 'react'
import style from '../styles.scss'
import Background from '../../../assets/img/StackedIncidentsIconPng.png'

export const StackedIncidents = (props) => {

  const sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '40px',
    width: '42px',
    height: '28px',
    position: 'relative',
  }

  return (
    <div style={sectionStyle} className={[style['ct-StackedEvents']]} >
      <div onClick={props.click}>
        <h1 >{props.quantity}</h1> 
      </div>
    </div>
  )
}