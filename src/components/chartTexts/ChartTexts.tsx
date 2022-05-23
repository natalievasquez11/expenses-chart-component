import React from 'react';
import './chartTexts.scss';

type TextProps = {
  cNameProp: string;
  titleValue: string;
  totalValue: string
}

 const ChartTexts = ({cNameProp, titleValue, totalValue}: TextProps): JSX.Element => {
  return (
    <span>
      <p className={`${cNameProp}--text ${cNameProp}--title title`}>{titleValue}</p>
      <p className={`${cNameProp}--text ${cNameProp}--total total`}>{totalValue}</p>
    </span>
  )
}

export default ChartTexts;
