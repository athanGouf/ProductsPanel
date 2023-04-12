import React from 'react';
import { AddNewIcon } from '@eurobank-unify/icons';
import { GridItem } from '@eurobank-unify/widgets';
import { Card, CardContent, IconButton } from '@material-ui/core';
import { blue } from 'assets/styles/colors';
import withStyles from '@material-ui/core/styles/withStyles';
import SectorHeader from './components/SectorHeader';

const styles = {
  addNewProductContainer: {
    color: blue,
  },
};

const AdditionalProducts = ({ classes }) => {
  return (
    <GridItem xs={12}>
      <SectorHeader headerText="Πρόσθετα Προϊόντα" name="additional" />
      <Card>
        <CardContent>
          <IconButton className={classes.addNewProductContainer}>
            <AddNewIcon width="16" height="16" color={blue} />
            <span>Προσθήκη</span>
          </IconButton>
        </CardContent>
      </Card>
    </GridItem>
  );
};

export default withStyles(styles)(AdditionalProducts);
