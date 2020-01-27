import * as React from 'react';
import style from './Input.scss';
import Aux from '../../shared/hoc/Auxiliar';

const setClasses = (disabled, big, type) => {
  let classes = [style["ct-input"]];
  if (disabled) {
    const disabledClasses = [style[`ct-input--disabled`]];
    classes = classes.concat(...disabledClasses);
  }
  if (big) {
    const bigClasses = [style[`ct-input--big`]];
    classes = classes.concat(...bigClasses);
  }
  if (type === "checkbox") {
    const checkboxClasses = [style[`ct-input--checkbox`]];
    classes = classes.concat(...checkboxClasses);
  }
  return classes.join(" ");
}

const Input: React.SFC<InputProps> = (props) => {
  const { type, disabled, change, label, required, big, value, suggestions, suggestionClick, suggestionValue } = props;
  let { suggestionLabel } = props;
  if (suggestionValue && !suggestionLabel) {
    suggestionLabel = suggestionValue;
  }
  const suggestionsId = `suggestions${new Date().getTime()}`;
  const classes = setClasses(disabled, big, type);
  return (
    <Aux>
      <div className={style["ct-input__container"]}>
        {label ?
          <p className={style["ct-input__label"]}>
            {required ?
              <span className={style["ct-input__label__required-indicator"]}>* </span>
              : null}
            {label}
          </p>
          : null}
        <div className={style["ct-wrapper"]}>
          <input list={suggestionsId} value={value} onChange={change} className={classes} type={type} />
          {type === "search" ?
            <img className={style["ct-input--search__icon"]} src="" alt="" />
            : null}
        </div>
      </div>
      <datalist id={suggestionsId}>
        {
          suggestions.map((e, i) => {
            let showElement;
            showElement = {
              label: suggestionLabel,
              value: suggestionValue
            }
            return <option value={e[`${showElement.value}`]} key={i}>{e[`${showElement.label}`]}</option>
          })}
      </datalist>
    </Aux>
  )
}

interface InputProps {
  type: string,
  value?: any,
  disabled: boolean,
  change?: any,
  label?: string,
  required: boolean,
  big: boolean,
  suggestions: Array<any>,
  suggestionLabel?: any,
  suggestionValue?: any,
  suggestionClick?: any
}


Input.defaultProps = {
  type: "text",
  disabled: false,
  required: false,
  big: false,
  suggestions: []
};

export default Input
