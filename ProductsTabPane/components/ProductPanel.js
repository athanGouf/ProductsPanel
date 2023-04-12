import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core';

import styles from './styles';

const ProductPanel = ({
  classes,
  children,
  contentClass,
  expandButton,
  expanded,
  subtitle,
  title,
}) => (
  <ExpansionPanel expanded={expanded}>
    <ExpansionPanelSummary classes={{ content: contentClass }}>
      <Typography variant="subheading" className={classes.panelTitle}>
        {title}
        {subtitle}
      </Typography>
      {expandButton}
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
  </ExpansionPanel>
);

export default withStyles(styles)(ProductPanel);
