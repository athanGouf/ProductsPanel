import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import ProductPanel from '../ProductPanel';
import styles from './styles';
import { usePanelHandling } from '../utils';
import CardForm from './CardForm';
import { statusTypes } from '../constant';

const Card = props => {
  const { data, setPanelStatus } = props;
  const { cardNumber } = data || {};
  const { contentClass, expandButton, isEditing, subtitle } = usePanelHandling(
    props,
    {
      publishBtnText: 'Έκδοση Κάρτας',
      assignedProdSubtitleTxt: cardNumber,
    }
  );

  return (
    <ProductPanel
      contentClass={contentClass}
      expandButton={expandButton}
      expanded={isEditing}
      subtitle={subtitle}
      title="Χρεωστική Κάρτα"
    >
      <CardForm
        onSave={() => {
          setPanelStatus(statusTypes.saved);
        }}
      />
    </ProductPanel>
  );
};

export default withStyles(styles)(Card);
