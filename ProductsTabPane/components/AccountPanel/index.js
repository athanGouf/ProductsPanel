import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import ProductPanel from '../ProductPanel';
import styles from './styles';
import { usePanelHandling } from '../utils';

const Account = props => {
  const {
    hasDeficiency,
    data: { accountNo, accountBalance },
  } = props;

  const { contentClass, expandButton, isEditing, subtitle } = usePanelHandling(
    props,
    {
      publishBtnText: 'Έκδοση Λογαριασμού',
      assignedProdSubtitleTxt: `IBAN ${accountNo}`,
    }
  );

  const title = hasDeficiency ? (
    'Καθημερινός Λογαριασμός'
  ) : (
    <>
      Καθημερινός Λογαριασμός <span>{accountBalance}€</span>
    </>
  );

  return (
    <ProductPanel
      contentClass={contentClass}
      expandButton={expandButton}
      expanded={isEditing}
      subtitle={subtitle}
      title={title}
    ></ProductPanel>
  );
};

export default withStyles(styles)(Account);
