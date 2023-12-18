import React from 'react'

const Button = ({title, linkTo, styles, onClick}) => {
  return (
    <>
      <a href={linkTo} onClick={onClick}><button className={styles}>{title}</button></a>
    </>
  );
};

export default Button;
