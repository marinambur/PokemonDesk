import React from 'react';
import classNames from 'classnames';
import s from './Heading.module.scss';

interface HeadingProps {
  priority?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 'p';
}
const Heading: React.FC<HeadingProps> = ({ children, priority }) => {
  const CustomTag = priority !== 'p' ? (`h${priority}` as keyof JSX.IntrinsicElements) : `p`;
  const classes = classNames(
    { [s.h1]: priority === 1 },
    { [s.h2]: priority === 2 },
    { [s.h3]: priority === 3 },
    { [s.h4]: priority === 4 },
    { [s.h5]: priority === 5 },
    { [s.h6]: priority === 6 },
    { [s.p]: priority === 'p' },
  ); // подскажи плз, как это записать короче (не смогла подставить из-за буквы s)
  return <CustomTag className={classes}>{children}</CustomTag>;
};

export default Heading;
