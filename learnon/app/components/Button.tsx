// button component with props

import React from 'react';

interface ButtonProps {
  auto: any;
  type: any;
  children: any;
  onClick?: () => void;
}



const Button: React.FC<ButtonProps> = ({ auto, type, children, onClick }) => {
  return (
    <button className={`btn ${type} ${auto ? 'auto' : ''}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;