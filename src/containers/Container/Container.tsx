import * as React from 'react';
import style from './Container.scss'

const setProportions = (height) => {
  return {
    height: height
  }
}

const Container:React.SFC<ContainerProps> = (props) => {
  const { children, height } = props;
  const proportions = setProportions(height);
  return (
    <div style={proportions} className={style['ct-container']}>
      {children}
    </div>
  );
}

interface ContainerProps {
  children: any,
  height: string,
}

Container.defaultProps = {
  children: null,
  height: "100vh"
}

export default Container
