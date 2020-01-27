import * as React from 'react';
import style from './Text.scss';

const setClasses = (size, priority, title, heavy) => {
  let classes:Array<string> = [];
  const baseClasses = [style["ct-text"], style[`ct-text--${size}`]];
  classes = [...baseClasses];
  if (priority) {
    const priorityClasses = [style[`ct-text--priority-${priority}`]];
    classes = classes.concat(...priorityClasses);
  }
  if (title) {
    const titleClasses = [style[`ct-text--title`]];
    classes = classes.concat(...titleClasses);
  }
  if (heavy) {
    const heavyClasses = [style[`ct-text--heavy`]];
    classes = classes.concat(...heavyClasses);
  }
  return classes.join(" ");
}

const Text:React.SFC<TextProps> = (props) => {
  const { children, size, priority, title, heavy } = props;
  const classes = setClasses(size, priority, title, heavy);
  return (
  <p className={classes}>{children}</p>
  )
}

interface TextProps {
  children: any,
  size: string,
  priority?: string,
  title: boolean,
  heavy: boolean
}

Text.defaultProps = {
  size: "normal",
  title: false,
  heavy: false
};

export default Text
