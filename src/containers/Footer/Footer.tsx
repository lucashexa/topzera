import * as React from 'react';
import style from './Footer.scss'

const Footer:React.SFC<FooterProps> = (props) => {
  const { children } = props;
  return (
    <div className={style['ct-footer']}>
      {children}
    </div>
  )
}

interface FooterProps {
  children: any
}

Footer.defaultProps = {
  children: null
}

export default Footer
