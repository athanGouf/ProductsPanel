import React from 'react';
import { GridItem } from '@eurobank-unify/widgets';

import SectorHeader from './components/SectorHeader';

const SuggestedProducts = ({}) => {
  return (
    <GridItem xs={12}>
      <SectorHeader headerText="Προτεινόμενα Προϊόντα" name="suggested" />
    </GridItem>
  );
};

export default SuggestedProducts;
