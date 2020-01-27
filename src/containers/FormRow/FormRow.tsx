import * as React from 'react';
import style from './FormRow.scss';
import Aux from '../../shared/hoc/Auxiliar'

const setClasses = () => {
  let classes = [style["ct-form__row"]];
  return classes.join(" ");
}

const setRatio = (ratio) => {
  let style = {
    gridAutoColumns: '1fr',
    gridTemplateColumns: ""
  };
  if (ratio) {
    const aRatio = ratio.split(":");
    const styledRatio = aRatio.join("fr ").concat("fr");
    style = {
      gridAutoColumns: "",
      gridTemplateColumns: styledRatio
    };
  }
  return style;

}

const FormRow: React.SFC<FormRowProps> = (props) => {
  const { children, ratio, title } = props;
  const viewRatio = setRatio(ratio);
  const classes = setClasses();
  return (
    <Aux>
      {title ?
        <p className={style['ct-form__row__title']}>
          {title}
        </p>
        : null}
      <div style={viewRatio} className={classes}>
        {children}
      </div>
    </Aux>
  )
}
interface FormRowProps {
  children: any,
  ratio?: string,
  title?: string
}

export default FormRow
