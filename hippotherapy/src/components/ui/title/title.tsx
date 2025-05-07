import React from 'react';
import style from './title.module.scss';

interface TitleProps {
  text: string;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ text, className }) => {
  const combinedClassName = `${style.titles} ${className || ''}`;

  return <h2 className={combinedClassName}>{text}</h2>;
};
