import React from 'react';
import { Button } from '@eurobank-unify/widgets';
import withStyles from '@material-ui/core/styles/withStyles';

import { bbrFooterStyles as styles } from './styles';

const BbrFooter = ({
  cancelBtnDisabled,
  classes,
  completeBtnDisabled,
  onCancel,
  onComplete,
}) => {
  return (
    <div className={classes.footer}>
      <Button
        className={classes.cancelButton}
        size="small"
        validation="off"
        type="default"
        onClick={onCancel}
        disabled={cancelBtnDisabled}
      >
        ΑΚΥΡΟ
      </Button>
      <Button
        disabled={completeBtnDisabled}
        className={classes.continueButton}
        size="small"
        type="submit"
        onClick={onComplete}
      >
        ΟΛΟΚΛΗΡΩΣΗ
      </Button>
    </div>
  );
};

export default withStyles(styles)(BbrFooter);
