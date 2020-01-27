import * as React from 'react';
import style from './Collapsible.scss'

const Collapsible: React.SFC<CollapsibleProps> = (props) => {
  const { label, children, defaultChecked } = props
  return (
    <div className={style["ct-collapsible__wrapper"]}>
      <input id="collapsible" className={style["ct-collapsible__toggle"]} type="checkbox" defaultChecked={defaultChecked} />
      <label htmlFor="collapsible" className={style["ct-collapsible__toggle__label"]}>{label}</label>
      <div className={style["ct-collapsible__content"]}>
        {children}
      </div>
    </div>
  );
}

interface CollapsibleProps {
  children: any,
  label: string,
  defaultChecked: boolean
}

Collapsible.defaultProps = {
  children: null,
  label: "",
  defaultChecked: false
}

export default Collapsible
