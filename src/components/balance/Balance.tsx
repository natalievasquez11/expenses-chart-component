import React from 'react';
import './balance.scss';
import ChartTexts from '../chartTexts/ChartTexts';

const Balance = () => {
  return (
    <div className='balance'>
      <ChartTexts cNameProp='balance' titleValue='My Balance' totalValue='$921.48'/>
      <span>
        <img className='balance--logo' src='logo.svg' alt='logo'/>
      </span>
    </div>
  )
};

export default Balance;
