import React from 'react';
import { Typography } from '@material-ui/core';
import {
  PaperClipIcon,
  AdditionalProductsIcon,
  SuggestedProductsIcon,
} from '@eurobank-unify/icons';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const icons = {
  additional: <AdditionalProductsIcon width="16" height="16" />,
  bbr: <PaperClipIcon width="16" height="16" />,
  suggested: <SuggestedProductsIcon width="16" height="16" />,
};

const SectorHeader = ({ classes, headerText, name = 'bbr' }) => (
  <div className={classes.headerContainer}>
    {icons[name]}
    <Typography variant="h6" className={classes.headerText}>
      {headerText}
    </Typography>
  </div>
);

export default withStyles(styles)(SectorHeader);
