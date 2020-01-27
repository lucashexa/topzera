import React from 'react'
import style from '../styles.scss'
import arrowPng from '../../../assets/img/doubleArrow.png'
import notifyPng from '../../../assets/img/InformerReturnIcon.png'

const Generic = (props) => {

  let notifyStyle, arrowStyle = {}

  const { active, notify, arrow, click } = props.props
  console.log(props.props)
  let { quantity } = props.props

  let classes = [style['ct-sidePanel']];
  
  if (active){
    classes = classes.concat([style['ct-sidePanel--active']])
  }

  if (notify) {
    notifyStyle = {
      backgroundImage: `url(${notifyPng})`,
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      height: '56px',
      width: '30px',
      marginTop: 'calc(38px/2)',
      zIndex: '1',
      marginLeft: '2px',
      backgroundSize: '15px'
      } 
    }
  

  if (arrow) {
    arrowStyle = {
      backgroundColor: '#134B96',
      backgroundImage: `url(${arrowPng})`,
      backgroundSize: '12px',
      backgroundPosition: 'center',
      borderRadius: '5px',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      height: '16px',
      width: '20px',
      marginTop: '5px',
      marginLeft: '35px',
      zIndex: '1'
    }   
  }
  if (quantity) {
    if(quantity < 10){
      quantity = ("0" + quantity).slice(-2)
    }
    classes = classes.concat([style['ct-sidePanel--quantity']])
  }

  classes = classes.join(' ')

  return (
    <div>
      {
        quantity && <div className={[style['ct-sidePanel--quantity']]}>
          <h1>{quantity}</h1>
        </div>
      }
      {
        arrow && <div style={arrowStyle} className={[style['ct-sidePanel--arrow']]}> </div>
      }
      {
        notify && <div style={notifyStyle} className={[style['ct-sidePanel--notify']]}> </div>
      }
      <div onClick={click} className={classes} >  
        {props.children}
      </div>
    </div>
  )
}

export default Generic