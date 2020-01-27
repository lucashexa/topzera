import * as React from 'react';
import style from './Row.scss';
import Aux from '../../shared/hoc/Auxiliar'

const setClasses = () => {
  let classes = [style["ct-row"]];
  return classes.join(" ");
}

const setProportions = (ratio, height) => {
  let style = {
    gridAutoColumns: '1fr',
    gridTemplateColumns: "",
    height: height ? height : "100%"
  };
  if(ratio) {
    const aRatio = ratio.split(":");
    const styledRatio = aRatio.join("fr ").concat("fr");
    style =  {
      gridAutoColumns: "",
      gridTemplateColumns: styledRatio,
      height: height
    };
  }
  return style;
}

const Row:React.SFC<RowProps> = (props) => {
  const { children, ratio, title, height } = props;
  const viewProportions = setProportions(ratio, height);
  const classes = setClasses();
  return (
    <Aux>
      {title ?
        <p className={style['ct-row__title']}>
          {title}
        </p>
        : null}
    <div style={viewProportions} className={classes}>
      {children}
    </div>
    </Aux>
  );
}

interface RowProps {
  children: any,
  ratio?: string,
  title?: string,
  height?: string
}

Row.defaultProps = {
  children: null,
  height: "100%"
}

export default Row;
