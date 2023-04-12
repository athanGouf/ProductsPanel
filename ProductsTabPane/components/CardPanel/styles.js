import { widgetsPrimaryButton } from 'assets/styles/common';
import { commonStyles } from '../styles';
import { basicGrey, lightGrey } from 'assets/styles/colors';

const styles = {
  ...commonStyles,
  cardType: {},
  contractNumberLabel: {
    width: '100%',
    marginBottom: 8,
  },
  contractNumberS: {
    width: 70,
    marginRight: 10,
  },
  contractNumberM: {
    width: 120,
  },
  inputPadding: {
    padding: '10px 14px 8px',
    textAlign: 'center',
  },
  inputDisabled: {
    background: basicGrey,
    color: `${lightGrey} !important`,
    borderRadius: 5,
    '& > fieldset': {
      borderColor: `${basicGrey} !important`,
      borderRadius: 5,
    },
  },
  cardNumberLabel: {
    marginBottom: 8,
  },
  cardNumber: {
    width: 230,
  },
  cardNumberInput: {
    padding: '10px 14px 8px',
  },
  wrongCardNumber: {
    height: '50%',
  },
  saveBtnContainer: {
    display: 'flex',
    justifyContent: 'end',
  },
  saveBtn: {
    ...widgetsPrimaryButton,
  },
};

export default styles;
