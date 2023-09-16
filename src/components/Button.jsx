import React from 'react';

const Button = ({value, id, action}) => {
  return (
    <input type="button" value={value} className="button" id={id}
      onClick={() => {action(value)}}/>
  );
};

export default Button;