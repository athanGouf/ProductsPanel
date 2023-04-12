import React, { useMemo } from 'react';

import ExpandButton from './ExpandButton';
import ExpansionSummaryText from './ExpansionSummaryText';
import { statusTypes } from './constant';

const getExpandButton = (
  classes,
  hasDeficiency,
  panelStatus,
  handleExpanded,
  publishBtnText
) => {
  if (!hasDeficiency || panelStatus === statusTypes.edit) return null;

  if (panelStatus === statusTypes.saved)
    return (
      <ExpandButton
        className={classes.detailsAction}
        text="Επεξεργασία"
        onClick={handleExpanded}
      />
    );

  return (
    <ExpandButton
      className={classes.publishBtn}
      text={publishBtnText}
      onClick={handleExpanded}
    />
  );
};

const getSubtitle = (
  classes,
  panelStatus,
  hasDeficiency,
  assignedProductText
) => {
  if (panelStatus === statusTypes.edit) return null;

  if (panelStatus === statusTypes.saved)
    return (
      <ExpansionSummaryText
        className={classes.successText}
        text="Έχει αποθηκευτεί"
        variant="body1"
      />
    );

  if (hasDeficiency)
    return (
      <ExpansionSummaryText
        className={classes.dangerText}
        text="Δεν έχει εκδοθεί"
        variant="body1"
      />
    );

  return <ExpansionSummaryText text={assignedProductText} variant="body1" />;
};

const usePanelHandling = (
  { classes, hasDeficiency, panelStatus, setPanelStatus },
  { publishBtnText, assignedProdSubtitleTxt }
) => {
  const handleExpanded = () => {
    setPanelStatus(statusTypes.edit);
  };

  const expandButton = useMemo(
    () =>
      getExpandButton(
        classes,
        hasDeficiency,
        panelStatus,
        handleExpanded,
        publishBtnText
      ),
    [panelStatus, hasDeficiency, classes, publishBtnText]
  );

  const subtitle = useMemo(
    () =>
      getSubtitle(classes, panelStatus, hasDeficiency, assignedProdSubtitleTxt),
    [classes, hasDeficiency, panelStatus, assignedProdSubtitleTxt]
  );

  const contentClass =
    panelStatus === statusTypes.saved
      ? classes.panelSummaryEdited
      : classes.panelSummary;

  const isEditing = panelStatus === statusTypes.edit;
  return {
    contentClass,
    expandButton,
    isEditing,
    subtitle,
  };
};

export { getExpandButton, getSubtitle, usePanelHandling };
