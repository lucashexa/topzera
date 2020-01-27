import * as React from 'react';
import style from './Button.scss';
import Aux from '../../shared/hoc/Auxiliar';
import { useState } from 'react';
import { useContext } from 'react';
import  EventContext  from '../../shared/context/index';

const setClasses = (type, disabled, iconOnly, combo) => {
  let classes:Array<string> = [];
  const baseClasses = [style["ct-button"], style[`ct-button--${type}`]];
  classes = [...baseClasses];
  if (disabled) {
    const disabledClasses = [style[`ct-button--disabled`], style[`ct-button--${type}--disabled`]];
    classes = classes.concat(...disabledClasses);
  }
  if (iconOnly) {
    const iconOnlyClasses = [style[`ct-button--icon-only`]];
    classes = classes.concat(...iconOnlyClasses);
  }
  if (combo) {
    const comboClasses = [style[`ct-button--combo`]];
    classes = classes.concat(...comboClasses);
  }
  return classes.join(" ");
}

const Button:React.SFC<ButtonProps> = (props) => {
  // const penis = useContext(EventContext)
  const { children, type, disabled, click, combo, list, listClick, iconOnly } = props;
  const classes = setClasses(type, disabled, iconOnly, combo);
  const [viewList, setViewList] = useState(false);
  return (
    <div className={style["ct-container"]}>
      <button onClick={click} className={classes}>{children}</button>
      {combo ?
        (
          <Aux>
            <button  onClick={() => { setViewList(!viewList) }} className={classes.concat(` ${style['ct-button--arrow']}`)}>v</button>
            {viewList ?
              <Aux>
                <ul className={style['ct-button__list']}>
                  {list.map((e) => {
                    return <li onClick={listClick} className={classes.concat(` ${style['ct-button--in-list']}`)}>{e}</li>
                  })}
                </ul>
              </Aux>
              : null}
          </Aux>
        )
        : null}
    </div>
  )
}


interface ButtonProps {
  type: string,
  disabled: boolean,
  click?: any,
  combo: boolean,
  list: Array<string>,
  listClick?: any,
  iconOnly: boolean,
  children: any
}

Button.defaultProps = {
  type: 'secondary',
  disabled: false,
  combo: false,
  list: [],
  iconOnly: false
};

export default Button
