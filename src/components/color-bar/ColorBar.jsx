import classnames from 'classnames';

import './color-bar.css';

export const ColorBar = ({ color }) => {
  const classes = classnames(
    'color-bar__container',
    color && `color-bar__container--${color}`
  );

  return <div className={classes} />;
};
