import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import ProductPanel from '../ProductPanel';
import styles from './styles';
import { usePanelHandling } from '../utils';

const Ebanking = props => {
  const { contentClass, expandButton, isEditing, subtitle } = usePanelHandling(
    props,
    {
      publishBtnText: 'Έκδοση e-Banking',
      assignedProdSubtitleTxt: `Ενεργοποιήθηκε ${props.data.activationDate}`,
    }
  );

  return (
    <ProductPanel
      contentClass={contentClass}
      expandButton={expandButton}
      expanded={isEditing}
      subtitle={subtitle}
      title="Κωδικοί e-Banking"
    ></ProductPanel>
  );
};

export default withStyles(styles)(Ebanking);
