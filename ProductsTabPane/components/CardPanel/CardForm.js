import React from 'react';
import {
  Field,
  Form,
  GridContainer,
  GridItem,
  Button,
} from '@eurobank-unify/widgets';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';
import CardNumberInput from 'components/CardNumberInput';
import { cardNumberFormat } from 'utils/formatters';

const readOnly = false;

const cardTypes = [
  {
    value: 'GA',
    label: 'DEBIT MASTERCARD',
  },
];

const CardForm = ({ classes, onSave }) => {
  const [formState, setFormState] = React.useState({
    data: {},
    valid: { cardType: false },
  });

  const handleChange = React.useCallback((name, value) => {
    let newValid = {};
    let newData = {};

    newData[name] = value;

    if (name === 'cardType' && value) {
      newValid.cardType = true;
    }

    if (name === 'cardNumber') {
      const cardNumber = cardNumberFormat(value);
      newData.cardNumber = cardNumber;
      newValid.cardNumber = cardNumber.length === 19;
    }

    setFormState(prev => ({
      data: { ...prev.data, ...newData },
      valid: { ...prev.valid, ...newValid },
    }));
  });

  const { wrongCardNumber } = formState.data || {};

  const contractFieldInputProps = React.useMemo(
    () => ({
      classes: {
        input: classes.inputPadding,
        disabled: classes.inputDisabled,
      },
    }),
    [classes]
  );

  React.useEffect(() => {
    if (wrongCardNumber) return;

    setFormState(prev => ({
      ...prev,
      valid: {
        cardType: prev.valid.cardType,
      },
    }));
  }, [wrongCardNumber]);

  return (
    <Form data={formState.data} onChange={handleChange} validateOnMount>
      <GridContainer spacing={24}>
        <GridItem xs={12} lg={8}>
          <Field
            className={classes.cardType}
            options={cardTypes}
            placeholder=""
            allowEmpty={false}
            fullWidth
            label="Επιλογή τύπου κάρτας"
            labelPlacement="start"
            name="cardType"
            variant="outlined"
            type="autocomplete"
            size="sm"
            disabled={readOnly}
          />
        </GridItem>
        <GridItem md={12}>
          <div className={classes.contractNumberLabel}>
            Αριθμός συμβολαίου κάρτας
          </div>
          <Field
            className={classes.contractNumberS}
            name="contractNumber-0"
            label=""
            variant="outlined"
            inputProps={{ maxLength: 4 }}
            InputProps={contractFieldInputProps}
            type="tel"
            disabled
          />
          <Field
            className={classes.contractNumberS}
            name="contractNumber-1"
            label=""
            variant="outlined"
            inputProps={{ maxLength: 4 }}
            InputProps={contractFieldInputProps}
            type="tel"
            disabled
          />
          <Field
            className={classes.contractNumberS}
            name="contractNumber-2"
            label=""
            variant="outlined"
            inputProps={{ maxLength: 2 }}
            InputProps={contractFieldInputProps}
            type="tel"
            disabled
          />
          <Field
            className={classes.contractNumberM}
            name="contractNumber-3"
            label=""
            variant="outlined"
            inputProps={{ maxLength: 10 }}
            InputProps={contractFieldInputProps}
            type="tel"
            disabled
          />
        </GridItem>
        <GridItem md={12}>
          <div className={classes.cardNumberLabel}>Αριθμός κάρτας</div>
          <CardNumberInput
            value={formState.data.cardNumber}
            disabled={!formState.data.wrongCardNumber}
          />
          <Field
            className={classes.wrongCardNumber}
            allowEmpty={false}
            uppercase
            label={'Ο αριθμός της κάρτας δεν είναι αυτός'}
            labelPlacement="start"
            name={'wrongCardNumber'}
            variant="outlined"
            type="switch"
            disabled={readOnly}
          />
        </GridItem>
        <GridItem md={12} className={classes.saveBtnContainer}>
          <Button className={classes.saveBtn} onClick={onSave}>
            ΑΠΟΘΗΚΕΥΣΗ
          </Button>
        </GridItem>
      </GridContainer>
    </Form>
  );
};

export default withStyles(styles)(CardForm);
