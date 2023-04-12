import React, { useState, useMemo } from 'react';
import { GridItem } from '@eurobank-unify/widgets';

import AccountPanel from './components/AccountPanel';
import CardPanel from './components/CardPanel';
import EbankingPanel from './components/EbankingPanel';
import EurophonePanel from './components/EurophonePanel';
import SectorHeader from './components/SectorHeader';
import BbrFooter from './components/BbrFooter';
import {
  initialStatuses,
  panels,
  statusTypes,
  deficienciesMapping,
} from './components/constant';
import { connect } from '@eurobank-unify/core';

const data = {
  account: {
    accountBalance: '5.524,06',
    accountNo: '22658655854452201',
  },
  card: {
    cardNumber: '2154 **** **** 2698',
  },
  ebanking: {
    activationDate: '20/4/2020',
  },
  europhone: {
    activationDate: '20/4/2020',
  },
};

const BbrProducts = ({ customerDeficiencies }) => {
  const [panelStatuses, setPanelStatuses] = useState(initialStatuses);

  const handlePanelStatuses = panel => status => {
    setPanelStatuses(panelStatuses => ({
      ...panelStatuses,
      [panel]: status,
    }));
  };

  const deficiencies = useMemo(() => {
    const { vtsProductsDeficiencies: prodDeficiencies } =
      customerDeficiencies || {};

    let tempDeficiencies = {};
    for (const key in deficienciesMapping) {
      const deficiency = prodDeficiencies.find(
        d => d === deficienciesMapping[key]
      );
      tempDeficiencies[key] = !!deficiency;
    }

    return tempDeficiencies;
  }, [customerDeficiencies]);

  const showFooter = useMemo(() => {
    const prodDeficiency = Object.keys(deficiencies).filter(
      k => !!deficiencies[k]
    );
    const allProductsSaved = prodDeficiency.every(
      k => panelStatuses[k] === statusTypes.saved
    );
    return prodDeficiency.length !== 0 && allProductsSaved;
  }, [deficiencies, panelStatuses]);

  return (
    <>
      <GridItem xs={12}>
        <SectorHeader headerText="Προϊόντα Βασικής Τραπεζικής Σχέσης" />
        <AccountPanel
          hasDeficiency={deficiencies.account}
          data={data.account}
          panelStatus={panelStatuses.account}
          setPanelStatus={handlePanelStatuses(panels.account)}
        />
        <CardPanel
          hasDeficiency={deficiencies.card}
          data={data.card}
          panelStatus={panelStatuses.card}
          setPanelStatus={handlePanelStatuses(panels.card)}
        />
        <EbankingPanel
          hasDeficiency={deficiencies.ebanking}
          data={data.ebanking}
          panelStatus={panelStatuses.ebanking}
          setPanelStatus={handlePanelStatuses(panels.ebanking)}
        />
        <EurophonePanel
          hasDeficiency={deficiencies.europhone}
          data={data.europhone}
          panelStatus={panelStatuses.europhone}
          setPanelStatus={handlePanelStatuses(panels.europhone)}
        />
      </GridItem>
      {showFooter && <BbrFooter />}
    </>
  );
};

export default connect(BbrProducts, ['customerDeficiencies'], 'ft');
