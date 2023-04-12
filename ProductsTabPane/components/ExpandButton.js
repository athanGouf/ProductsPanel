import React from 'react';

const ExpandButton = ({ className, onClick, text }) => (
  <div className={className} onClick={onClick}>
    {text}
  </div>
);

export default ExpandButton;
