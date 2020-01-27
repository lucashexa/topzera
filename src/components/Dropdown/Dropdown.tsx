import * as React from 'react';
import style from './Dropdown.scss'

const setClasses = (disabled) => {
  let classes = [style["ct-dropdown"]];
  if (disabled) {
    const disabledClasses = [style[`ct-dropdown--disabled`]];
    classes = classes.concat(...disabledClasses);
  }
  return classes.join(" ") ;
}

const Dropdown:React.SFC<DropdownProps> = (props) => {
  const {label, required, disabled, change, options} = props;
  const classes = setClasses(disabled);
  return (
    <div className={style["ct-dropdown__container"]}>
      {label ?
        <p className={style["ct-dropdown__label"]}>
          {required ?
            <span className={style["ct-dropdown__label__required-indicator"]}>* </span>
            : null}
          {label}
        </p>
        : null}
      <select className={classes} onChange={change}>
            {options.map((e) => {
              if(typeof e !== "object") {
                e = {
                  label: e,
                  value: e
                }
              }
              return <option value={e.value}>{e.label}</option>
            })}
      </select>
    </div>
  )
}

interface DropdownProps {
  disabled: boolean,
  change?: any,
  label?: any,
  required: boolean,
  options: Array<any>
}

Dropdown.defaultProps = {
  disabled: false,
  required: false,
  options: []
};

export default Dropdown;
