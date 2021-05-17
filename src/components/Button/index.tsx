import React from 'react';
import classNames from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'defaultSize' | 'small' | 'wide';
  color?: 'green' | 'yellow';
}
const Button: React.FC<ButtonProps> = ({ children, onClick, color, size }) => {
  const classes = classNames(
    s.root,
    color ? s[`${color}` as keyof typeof s] : null,
    size ? s[`${size}` as keyof typeof s] : null,
  );
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
