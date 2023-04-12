import React from 'react';
import { GridContainer, LoaderOverlay } from '@eurobank-unify/widgets';

import BbrProducts from './BbrProducts';
import SuggestedProducts from './SuggestedProducts';
import AdditionalProducts from './AdditionalProducts';

const ProductsTabPane = () => {
  return (
    <GridContainer spacing={24}>
      <BbrProducts />
      <SuggestedProducts />
      <AdditionalProducts />
    </GridContainer>
  );
};

export default ProductsTabPane;
