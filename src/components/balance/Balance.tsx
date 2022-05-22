import React from 'react';
import './balance.scss';

const Balance = () => {
  return (
    <div className='balance'>
      <span>
        <p className='balance--text balance--title'>My Balance</p>
        <p className='balance--text balance--total'>$921.48</p>
      </span>
      <span>
        <img className='balance--logo' src='logo.svg' alt='logo'/>
      </span>
    </div>
  )
};

export default Balance;
