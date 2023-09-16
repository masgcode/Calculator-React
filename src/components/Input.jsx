import React from 'react';

const Input = ({text}) => {
  return (
    <input type="text" id="text_field" dir="rtl" disabled value={text}/>
  );
};

export default Input;