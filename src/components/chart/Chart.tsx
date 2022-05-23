import React from 'react';
import './chart.scss';
import ChartBar from './chartBar/ChartBar';
import ChartTexts from '../chartTexts/ChartTexts';

const Chart = () => {
  return (
    <div className='chart'>
      <h2>Spending - Last 7 days</h2>
      <ChartBar />
      <hr></hr>
      <span className='chart--bottom-span'>
        <ChartTexts cNameProp='chart' titleValue='Total this month' totalValue='$478.33' />
        <span className='chart--trend-span'>
          <p className='chart--trend-span__percent'>+2.4%</p>
          <p className='chart--trend-span__text'>from last month</p>
        </span>
      </span>
    </div>
  );
}

export default Chart;
