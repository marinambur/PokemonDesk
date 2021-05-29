import React from 'react';
import classNames from 'classnames';
import s from './Heading.module.scss';

interface HeadingProps {
  priority?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 'p';
  className?: string;
}
const Heading: React.FC<HeadingProps> = ({ children, priority , className}) => {
  const CustomTag = priority !== 'p' ? (`h${priority}` as keyof JSX.IntrinsicElements) : `p`;
  const classes = classNames(
    s.root,
    className,
    priority !== 'p' ? s[`h${priority}` as keyof typeof s] : s[`${priority}` as keyof typeof s],
  );
  return <CustomTag className={classes}>{children}</CustomTag>;
};

export default Heading;
