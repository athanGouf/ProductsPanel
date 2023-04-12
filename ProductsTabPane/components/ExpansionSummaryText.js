import React from 'react';
import { Typography } from '@material-ui/core';

const ExpansionSummaryText = ({ className, text, variant }) => (
  <Typography variant={variant} className={className}>
    {text}
  </Typography>
);

export default ExpansionSummaryText;
