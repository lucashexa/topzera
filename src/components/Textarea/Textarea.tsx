import * as React from 'react';
import style from './Textarea.scss';
import Aux from '../../shared/hoc/Auxiliar';

const setClasses = (disabled) => {
  let classes = [style["ct-textarea"]];
  if (disabled) {
    const disabledClasses = [style[`ct-textarea--disabled`]];
    classes = classes.concat(...disabledClasses);
  }
  return classes.join(" ");
}

const Textarea:React.SFC<TextareaProps> = (props) => {
  const {disabled, change, required, label, rows} = props;
  const classes = setClasses(disabled);
  return (
    <Aux>
      {label ?
        <p className={style["ct-textarea__label"]}>
          {required ?
            <span className={style["ct-textarea__label__required-indicator"]}>* </span>
            : null}
          {label}
        </p>
        : null}
      <textarea className={classes} onChange={change} cols="30" rows={rows}></textarea>
    </Aux>
  )
}

interface TextareaProps {
  disabled:boolean,
  change?:any,
  label?:string,
  required: boolean,
  rows: number
}

Textarea.defaultProps = {
  disabled: false,
  required: false,
  rows: 5
};

export default Textarea;
