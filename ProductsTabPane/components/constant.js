const statusTypes = {
  edit: 'edit',
  saved: 'saved',
};

const initialStatuses = {
  account: '',
  card: '',
  ebanking: '',
  europhone: '',
};

const panels = {
  account: 'account',
  card: 'card',
  ebanking: 'ebanking',
  europhone: 'europhone',
};

const deficienciesMapping = {
  account: 'DEPOSIT',
  card: 'CARD',
  ebanking: 'EBANKING',
  europhone: 'PHONE_BANKING',
};

export { statusTypes, initialStatuses, panels, deficienciesMapping };
