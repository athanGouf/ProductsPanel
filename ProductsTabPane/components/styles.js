import { blue, euroRed, blueBg, green, white } from 'assets/styles/colors';
import {
  actionBarItem,
  animatedActionBarStyles,
  widgetsOutlinedButton,
  widgetsPrimaryButton,
} from 'assets/styles/common';

const panelFlex = { justifyContent: 'space-between', alignItems: 'center' };

const commonStyles = {
  dangerText: {
    color: euroRed,
  },
  detailsAction: {
    ...actionBarItem,
    ...animatedActionBarStyles,
    cursor: 'pointer',
  },
  panelSummaryEdited: {
    ...panelFlex,
    '& > :last-child': {
      padding: 0,
    },
  },
  panelSummary: {
    ...panelFlex,
  },
  publishBtn: {
    ...widgetsOutlinedButton,
    fontSize: 16,
    borderColor: blue,
    color: blue,
    '&:hover': {
      color: blueBg,
    },
  },
  successText: {
    color: green,
  },
};

const bbrFooterStyles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '-webkit-fill-available',
    padding: '20px 40px',
    position: 'fixed',
    backgroundColor: white,
    boxShadow: '0px 1px 5px rgb(0 0 0 / 35%)',
    bottom: 0,
    marginLeft: -12,
    zIndex: 1,
  },
  continueButton: {
    ...widgetsPrimaryButton,
    padding: '15px 45px 15px',
    border: 'none',
  },
  cancelButton: {
    ...widgetsOutlinedButton,
    padding: '15px 45px 15px',
  },
};

const styles = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 15,
  },
  headerText: {
    marginLeft: 10,
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: 700,
    '& span': {
      fontWeight: 'normal',
    },
  },
};

export { styles as default, commonStyles, bbrFooterStyles };
